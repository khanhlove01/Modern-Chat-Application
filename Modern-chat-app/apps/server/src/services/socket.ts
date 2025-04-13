import { Server } from "socket.io";
import Redis from 'ioredis'

const pub = new Redis();
const sub = new Redis();

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
  }

  public initListeners() {
    const io = this.io;
    console.log("init socket listener...");

    io.on("connect", (socket) => {
      console.log("New socket connected", socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message Rec.", message);
        // publish this message to redis
        //await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
