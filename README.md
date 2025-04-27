<h1 align="center">💬 Scalable Real-Time Chat Application</h1>

<p align="center">
  <b>Real-time messaging with distributed system components: Redis, Kafka, and PostgreSQL.</b>
  <br/><br/>
  <img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js" />
  <img src="https://img.shields.io/badge/WebSocket-Socket.IO-blue?logo=socket.io" />
  <img src="https://img.shields.io/badge/Queue-Kafka-orange?logo=apachekafka" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql" />
  <img src="https://img.shields.io/badge/Cache-Redis-red?logo=redis" />
  <img src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript" />
</p>

---

## 📚 Table of Contents

- [Motivation](#-motivation)
- [Why This Project?](#-why-this-project)
- [What I Learned](#-what-i-learned)
- [Technologies Used](#-technologies-used)
- [Main Idea](#-main-idea)
- [System Components](#-system-components)
- [Overall Architecture](#-overall-architecture)
- [License](#-license)

---

## 🚀 Motivation

We wanted to create a **scalable real-time chat application** that could handle multiple servers and users while ensuring instant message delivery.  
This project explores distributed system concepts in a practical way.

---

## 🎯 Why This Project?

This was a **side project** I worked on to **practice distributed systems**, and gain hands-on experience with **Kafka**, **Redis**, and **PostgreSQL** in a real-world architecture.

---

## 🧠 What I Learned

- Backend development with **Node.js** and **TypeScript**
- Real-time communication using **Socket.io**
- Event-driven architecture with **Redis Pub/Sub** and **Kafka**
- Building scalable messaging systems
- Reliable data persistence with **PostgreSQL**

---

## 🛠️ Technologies Used

| Technology | Purpose |
|:-----------|:--------|
| **Node.js** | Server-side runtime environment |
| **TypeScript** | Strongly-typed JavaScript |
| **Socket.io** | WebSocket real-time communication |
| **Redis** | Fast Pub/Sub for cross-server event distribution |
| **Kafka** | Message queue for scalable event buffering |
| **PostgreSQL** | Permanent chat history storage |

---

## 💡 Main Idea

- **Users** (e.g., User1, User2) connect to **Server 1** or **Server 2** through **Socket.io** (WebSocket).
- **Redis Pub/Sub** ensures real-time messaging synchronization across different servers.
- When a user sends a message:
  - The server **broadcasts** it instantly to other users (via Redis Pub/Sub).
  - The server also **pushes** the message into **Kafka** for durable, scalable processing.
- A **Kafka consumer** (Node.js app) listens for new messages and writes them into **PostgreSQL** for permanent storage.

---

## 🏗️ System Components

| Component | Purpose |
|:----------|:--------|
| **Socket.io Servers** | Handle user connections and real-time communication |
| **Redis** | Instantly sync real-time events across multiple servers |
| **Kafka** | Buffer and decouple message flow (high-throughput message queue) |
| **Node.js Consumer** | Read messages from Kafka and write into PostgreSQL |
| **PostgreSQL** | Store chat history permanently |

---

## 🖼️ Overall Architecture

<p align="center">
  <img src="https://i.imgur.com/AADSYPw.jpg" alt="System Architecture" width="800">
</p>

---

## 📜 License

This project was developed for educational and practice purposes. Feel free to explore and modify it!

---
