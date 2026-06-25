# 💻 Kolab

> A real-time collaborative code editor that enables multiple developers to code together in the same room, communicate instantly, and collaborate seamlessly using WebSockets.

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Server-black?logo=express)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--Time-010101?logo=socket.io)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)

---

# 📖 Overview

Kolab is a collaborative coding platform designed to make remote programming simple and efficient. Developers can create or join coding rooms using a unique Room ID, edit code simultaneously, and see updates in real time.

The application uses **Socket.IO** to synchronize code changes instantly between connected users, making it suitable for pair programming, coding interviews, collaborative learning, and team projects. Real-time synchronization is a common architecture for collaborative code editors and pair-programming platforms. :contentReference[oaicite:0]{index=0}

---

# ✨ Features

- 🚀 Real-time collaborative code editing
- 👥 Create and join coding rooms
- 🔄 Instant code synchronization
- ⚡ WebSocket communication using Socket.IO
- 🎨 Clean and responsive interface
- 📝 Live code updates
- 🔗 Unique Room ID generation
- 🌐 Multi-user collaboration
- 📱 Responsive design
- ⚙️ Fast React-based frontend

---

# 🛠 Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

## Backend

- Node.js
- Express.js
- Socket.IO

## Communication

- WebSockets
- Socket.IO

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```text
Kolab/
│
├── client/
│   ├── public/
│   │   ├── _redirects
│   │   ├── kolab.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Client.jsx
│   │   │   ├── Editor.jsx
│   │   │   ├── EditorPage.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── Socket.js
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/HarshKumar7687/kolab.git
```

## 2. Navigate to the project directory

```bash
cd kolab
```

---

## 3. Install frontend dependencies

```bash
cd client
npm install
```

---

## 4. Install backend dependencies

```bash
cd ../server
npm install
```

---

## 5. Start Backend Server

```bash
npm start
```

or

```bash
node index.js
```

---

## 6. Start Frontend

```bash
cd client
npm run dev
```

---

The application will be available at

```
http://localhost:5173
```

---

# 🚀 How It Works

1. User opens the application.
2. Create a new room or join an existing room using a Room ID.
3. Share the Room ID with collaborators.
4. Every connected user can edit code simultaneously.
5. Changes are synchronized instantly across all users.
6. Collaborators can work together in real time without refreshing the page.

---

# 📸 Screenshots

Add screenshots here.

```
screenshots/
│
├── home.png
├── editor.png
├── room.png
└── collaboration.png
```

---

# 📚 Learning Outcomes

This project helped strengthen my understanding of:

- React Component Architecture
- WebSocket Communication
- Socket.IO
- Real-Time Event Handling
- Client-Server Architecture
- REST APIs
- State Management
- Responsive UI Design
- Frontend and Backend Integration
- Git & GitHub Workflow

---

# 🔮 Future Enhancements

- 💬 Integrated Chat System
- 🎤 Voice Chat
- 📹 Video Calling
- 🌙 Dark Mode
- 🌐 Multiple Programming Language Support
- ▶️ Code Execution
- 📂 File Explorer
- 💾 Save Projects
- 🔐 Authentication
- 👨‍💻 User Profiles
- 📝 Collaborative Whiteboard
- 🕒 Version History

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository

2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Harsh Kumar**

B.Tech Computer Science Engineering

Institute of Technical Education and Research (ITER), SOA University

### Connect with Me

- 💼 LinkedIn: https://www.linkedin.com/in/harsh-kumar-91aa8132b/
- 💻 GitHub: https://github.com/HarshKumar7687
- 🌐 Portfolio: https://harshkumar-dev-portfolio.netlify.app/

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects and improve this application.

---

# 📄 License

This project is licensed under the MIT License.
