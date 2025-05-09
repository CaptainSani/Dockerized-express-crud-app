# Dockerized Full-Stack CRUD App

A full-stack web application with user registration, login, and CRUD functionality using:

- **Backend:** Express.js + PostgreSQL (with raw SQL)
- **Frontend:** Vue.js 3 (Vite)
- **Containerization:** Docker & Docker Compose

---

##  Features

- User Registration & Login (JWT-based)
- Secure password hashing with bcrypt
- Token-based authentication
- Protected API routes
- Fetch and display all users
- Fully containerized stack

---


---

##  Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

##  Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/CaptainSani/Dockerized-express-crud-app.git
cd dockerized-express-crud-app

---

## Start the app
docker-compose up --build