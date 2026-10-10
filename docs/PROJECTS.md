# Featured Engineering Projects

## Overview

This document provides a technical deep-dive into the primary engineering projects highlighted across the portfolio. Each project represents hands-on engineering targeting AI, machine learning, systems architecture, and full-stack software development.

---

## 1. SOMed-AI — Intelligent Clinical Assistant & Diagnostic Portal

- **Domain:** Applied AI / Healthcare Informatics / Natural Language Processing
- **Live Demo:** [https://somed-ai-portal-ns-d7c2.vercel.app/](https://somed-ai-portal-ns-d7c2.vercel.app/)
- **Core Technologies:** Python, BioGPT / Clinical Transformers, LangChain, FastAPI, Next.js, TailwindCSS

### Architecture & Engineering Highlights
- **Retrieval-Augmented Generation (RAG):** Implemented contextual document retrieval over PubMed clinical abstracts and medical guidelines using vector embeddings (FAISS/ChromaDB).
- **Prompt Engineering & Safety Guards:** Custom guardrail pipelines ensuring diagnostic recommendations adhere to medical disclaimers and hallucination minimization.
- **Microservice API:** High-throughput FastAPI endpoints serving asynchronous model inferences with streaming response generation.

---

## 2. EcoRevive — Sustainable E-Commerce & Circular Economy Platform

- **Domain:** Full-Stack Web Development / Sustainability Tech
- **GitHub Repository:** [https://github.com/NaitikSharma7804/EcoRevive](https://github.com/NaitikSharma7804/EcoRevive)
- **Core Technologies:** React, Next.js, Node.js, Express, MongoDB, TailwindCSS, Cloudinary

### Architecture & Engineering Highlights
- **Circular Marketplace Mechanics:** Platform connecting eco-conscious consumers with verified refurbished and sustainable goods.
- **RESTful Architecture:** Scalable backend with JWT-based role authentication (Admin, Seller, Consumer), pagination, and indexing.
- **Responsive UI/UX:** Mobile-first interface designed for seamless product discovery and checkout flows.

---

## 3. Smart EV Charging Management System

- **Domain:** IoT Telemetry / Systems Architecture / Distributed Services
- **GitHub Repository:** [https://github.com/NaitikSharma7804/SMART-EV-CHARGING-MANAGEMENT-SYSTEM](https://github.com/NaitikSharma7804/SMART-EV-CHARGING-MANAGEMENT-SYSTEM)
- **Core Technologies:** Python, Django, Redis, PostgreSQL, WebSockets, Chart.js

### Architecture & Engineering Highlights
- **Real-Time Telemetry Pipeline:** WebSocket-based event streaming for real-time station occupancy, power delivery rates, and queue tracking.
- **Queue Management & Scheduling:** Asynchronous job queues powered by Celery and Redis to optimize grid loads and charging slot reservation.
- **Admin Dashboard:** Role-based operations console for municipal station operators to monitor revenue and device health.
