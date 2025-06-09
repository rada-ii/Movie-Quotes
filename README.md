# 🎬 Movie Quotes

A simple React app for sharing famous movie quotes.

**Live Demo:** [https://movie-quotes-xi.vercel.app/](https://movie-quotes-xi.vercel.app/)

## ⚡ Quick Start

```bash
npm install
npm start
```

## 🛠️ Tech Stack

- React 18 + Vanilla CSS
- Supabase (Database)
- Deployed on Vercel

## 🎯 Features

- Add movie quotes with actor, character, and movie info
- Filter by genre (action, drama, comedy, etc.)
- Fully responsive design

## 📊 Database Setup

Create a Supabase project and run this SQL:

```sql
CREATE TABLE quotes (
  id BIGSERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  source TEXT,
  genre TEXT NOT NULL,
  actor TEXT,
  "characterInTheMovie" TEXT,
  "nameOfTheMovie" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE quotes DISABLE ROW LEVEL SECURITY;
```

Update `supabase.js` with your credentials.

## 🎨 What it looks like

- Desktop: Sidebar with genre filters
- Mobile: Responsive layout with touch-friendly buttons
- Dark theme with clean design
