DevOps Full Stack Website

This is a simple full-stack project that uses a frontend, backend, and MySQL database, all running through Docker.
The website shows basic server information by calling an API from the backend.

What this project does

The frontend shows a simple webpage.

The backend (Node + Express) provides an API that returns information like hostname, platform, CPU count, and IP address.

The frontend fetches this information and displays it.

A MySQL database is included for storing simple data.

Everything runs inside Docker containers, so no installation of Node or MySQL is needed on your machine.

Why Docker is used

To run the project without installing Node.js or MySQL manually

To make the setup the same for everyone

To keep frontend, backend, and database as separate services

Makes starting the project as simple as running one command

Earlier the website worked without Docker, but Docker makes it more professional, portable, and production-like.

How the project works (simple explanation)

Docker Compose starts three services:

Frontend (Nginx)

Backend (Node.js)

Database (MySQL)

The backend connects to the MySQL database.

The frontend sends a request to the backend API.

The backend returns server information.

The frontend displays that information on the webpage.

Features

Backend API returns system details

Simple frontend UI

MySQL database with sample data

Fully containerized using Docker

Purpose of this project

This project helps learn:

Full-stack development

How backend and database connect

How frontend talks to backend

How Docker is used in real projects

Basics of DevOps workflows
