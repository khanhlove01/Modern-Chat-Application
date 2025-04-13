import { Server } from "socket.io";
import Redis from 'ioredis'
import { config } from 'dotenv';
import prismaClient from "./prisma";
import {createProducer, produceMessage} from './kafka'
config(); // Load environment variables from .env

const pub = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASSWORD
});
const sub = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASSWORD
});

class SocketService {
  private _io: Server;

  constructor() {
    console.log("Init Socker Server");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("MESSAGES")
  }

  public initListeners() {
    const io = this.io;
    console.log("init socket listener...");

    io.on("connect", (socket) => {
      console.log("New socket connected", socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message Rec.", message);
        // publish this message to redis
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
    sub.on('message',async (channel,message) => {
        if(channel == 'MESSAGES'){
            io.emit("message",message)
            // await prismaClient.message.create({
            //     data:{
            //         text: message,
            //     }
            // })
            await produceMessage(message)
            console.log("Message produced to kafka broker");
            
        }
    })
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
