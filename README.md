# Portfolio Graph

An Obsidian-inspired portfolio app that visualizes your work experiences as an interactive knowledge graph. Recruiters can explore your background by clicking nodes — experiences with shared tags or explicit links are connected automatically.

![Graph View](https://placeholder-screenshot.png)

## Features

- **Interactive graph view** — force-directed layout, zoom, drag
- **Node connections** via shared tags or explicit manual links
- **Rich experience cards** — title, description, image, date, tags, and external link
- **Admin UI** to add, edit, and delete experiences
- **Dark Obsidian aesthetic**

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + TypeScript |
| Graph | react-force-graph-2d |
| Backend | FastAPI (Python) |
| Database | SQLite via SQLAlchemy |
| Styling | Tailwind CSS v4 |

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.
Swagger docs: `http://localhost:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Project Structure

```
portfolioexperiment/
├── backend/
│   ├── main.py           # FastAPI app
│   ├── database.py       # SQLite engine + session
│   ├── models.py         # SQLAlchemy ORM models
│   ├── schemas.py        # Pydantic schemas
│   ├── routers/
│   │   ├── experiences.py
│   │   ├── tags.py
│   │   ├── links.py
│   │   └── graph.py      # Graph data endpoint
│   └── uploads/          # Uploaded images (gitignored)
└── frontend/
    └── src/
        ├── components/
        │   ├── graph/    # GraphCanvas (force graph)
        │   ├── experience/  # Panel, Form, Card, ImageUpload
        │   ├── tag/      # TagInput combobox
        │   └── layout/   # AppShell, Sidebar
        └── pages/
            ├── GraphPage.tsx   # Recruiter-facing view
            └── ManagePage.tsx  # Admin CRUD
```

## How Connections Work

| Edge type | Color | How it's created |
|-----------|-------|-----------------|
| Shared tag | Purple | Automatically — any two experiences sharing a tag |
| Explicit link | Amber | Manually via the `/api/links/` endpoint |

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/graph/` | Graph nodes and edges |
| GET | `/api/experiences/` | List all experiences |
| POST | `/api/experiences/` | Create (multipart/form-data) |
| PUT | `/api/experiences/{id}` | Update |
| DELETE | `/api/experiences/{id}` | Delete |
| GET | `/api/tags/` | All tags |
| POST | `/api/links/` | Create explicit link |
| DELETE | `/api/links/{id}` | Remove link |
