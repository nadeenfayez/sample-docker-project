## 🐳 Docker Setup

> This project is fully containerized using **Docker** and **Docker Compose** to provide a consistent and isolated development environment.

---

## 🧩 Architecture Overview

```
Client (React + Vite)  →  API (Node.js + Express)  →  MongoDB
        │                          │                    │
        └──────────── Docker Network (service names) ───┘
```

---

## 📦 Services

| Service    | Description           | Port (Host → Container) |
| ---------- | --------------------- | ----------------------- |
| **client** | React (Vite) frontend | `5173 → 5173`           |
| **api**    | Express backend API   | `4000 → 4000`           |
| **mongo**  | MongoDB database      | `27018 → 27017`         |

---

## 🔗 Networking

### 🐳 Inside Docker

Containers communicate using **service names**:

```text
mongodb://mongo:27017
```

### 💻 From Host (e.g., MongoDB Compass)

```text
mongodb://localhost:27018
```

> ⚠️ `localhost` inside a container refers to the container itself — not other services.

---

## 💾 Volumes

Named volumes are used for persistence and stability:

```yaml
volumes:
  api_node_modules:
  client_node_modules:
  mongo-data:
```

### ✅ Benefits

* 🔒 Prevents `node_modules` from being overwritten
* 💽 Persists MongoDB data across container restarts
* ⚡ Improves performance and consistency

---

## 🔄 Hot Reloading

Bind mounts sync your local code with the containers:

```yaml
- ./api:/app
- ./client:/app
```

✔ Instant updates without rebuilding
✔ Smooth development workflow

---

## 🌱 Database Seeding

The database is automatically initialized using a seed script:

📁 `scripts/seed.js`

### 🔁 Behavior

```js
if (count > 0) {
  // Skip seeding if data already exists
}
```

### ✅ Result

* Runs **only once**
* Prevents duplicate data
* Keeps database consistent

---

## ⚙️ Startup Flow

The API container uses a custom startup script:

📁 `start.sh`

```bash
#!/bin/sh

# Wait for MongoDB
# Run seed script
# Start server
```

### 🔄 Execution Flow

```
Container starts
   ↓
Wait for MongoDB ⏳
   ↓
Seed database 🌱
   ↓
Start API 🚀
```

---

## ▶️ Running the Project

### 🔧 Start everything

```bash
docker-compose up --build
```

---

### ♻️ Reset (including database)

```bash
docker-compose down -v
docker-compose up --build
```

---

## 🧠 Key Concepts Demonstrated

* 🐳 Multi-container architecture
* 🔗 Docker networking (service discovery)
* 💾 Named volumes vs bind mounts
* 🔄 Container lifecycle management
* 🌱 Idempotent database seeding

---

## ✨ Highlights

* Clean separation of concerns (client / server / database)
* Reliable startup sequence
* Production-like development environment
* Scalable and maintainable Docker setup
