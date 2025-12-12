🌐 Full Stack Dockerized Web App

This project is a simple full-stack application built with a Frontend (HTML/JS), Backend (Node.js + Express), and a MySQL Database.
The entire application runs using Docker, making setup easy and consistent across all systems.

🚀 What This Project Does

Shows a webpage served from the frontend container

Fetches data from the backend API

Stores and retrieves messages from a MySQL database

Runs all services inside Docker containers

Demonstrates basic full-stack + DevOps concepts

🧩 Why Docker?

Normally you would need to install:

Node.js

MySQL

NPM packages

Local servers

With Docker:

No installations needed

Environment works the same for everyone

Easy to start and stop services

Professional structure like real DevOps deployments

Containers keep backend, frontend, and database separated

This project originally worked without Docker, but containerizing it makes it cleaner, safer, and easier to deploy anywhere.

🔄 How It Works 

Frontend sends a request to the backend API.

Backend connects to the MySQL database to store or get data.

Backend returns the response.

Frontend displays the information on the page.

All three—Frontend, Backend, and Database—run in separate Docker containers using Docker Compose.

⭐ Features

Simple UI to interact with backend

API to get and add messages

MySQL database with sample data

Fully containerized setup

Clean and beginner-friendly code

Great for DevOps learning and practice

🎯 Purpose of This Project

This project is useful for learning:

How full-stack systems are structured

How frontend, backend, and database communicate

How Docker simplifies deployment

Basics of microservice-like architecture

DevOps workflows using Docker Compose
