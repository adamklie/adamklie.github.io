---
layout: page
title: Greenroom
description: A music career manager for aspiring musicians
importance: 2
category: tools
---

**Greenroom** is a self-hosted music career manager. It reads your existing music directory — solo recordings, band practice sessions, collabs, ideas — and turns the mess into a navigable dashboard for tracking repertoire, rating takes, planning content, and following a roadmap from bedroom to stage.

I built it because my own music directory had grown past the point of being manageable by hand: 110+ songs across solo projects, collabs, and a trio (Ozone Destructors), dozens of weekly practice sessions, and no single place to see what was polished, what was an idea, and what I should actually be practicing next.

## What it does

- **Dashboard** — career stats, roadmap progress with checklists, songs by status
- **Repertoire manager** — searchable catalog of every song with status tracking (idea → rehearsed → polished → recorded → released) and inline audio playback
- **Practice session browser** — browse band practice sessions by date, listen to takes in the browser, rate them 1–5 stars
- **Content planner** — Kanban board for social media posts (Planned → Ready → Posted), linked to songs and recordings

## Stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** FastAPI + SQLAlchemy + SQLite
- **Media:** native HTML5 audio/video streaming via FastAPI

## Links

- [GitHub](https://github.com/adamklie/greenroom)
