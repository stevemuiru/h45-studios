# H45 Studios

Website for H45 Studios — branding & graphic design, arts & entertainment, and luxury fashion centered on the art of upcycling.

## Tech stack

- **Frontend:** React (Vite), React Router, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL, via Prisma ORM

## Project structure

This is a monorepo — one Git repository containing two separate applications:

- `client/` — the React frontend
- `server/` — the Express API and database layer

They run as two independent processes locally, and will be deployed separately.

## Getting started

### Prerequisites

- Node.js
- PostgreSQL, running locally

### 1. Clone and install

\`\`\`bash
git clone <repo-url>
cd h45-studios

cd client && npm install
cd ../server && npm install
\`\`\`

### 2. Set up the database

Create a local Postgres database:

\`\`\`bash
psql
CREATE DATABASE h45studios;
\`\`\`

### 3. Environment variables

**`server/.env`**
\`\`\`
PORT=5000
DATABASE_URL="postgresql://USER:PASSWORD@127.0.0.1:5432/h45studios?schema=public"
ADMIN_API_KEY="a-long-random-string"
GMAIL_USER=
GMAIL_APP_PASSWORD=
\`\`\`

**`client/.env`**
\`\`\`
VITE_API_URL=http://localhost:5000
\`\`\`

### 4. Run migrations and seed the database

\`\`\`bash
cd server
npx prisma migrate dev
node prisma/seed.js
\`\`\`

### 5. Run both apps

In two separate terminals:

\`\`\`bash
cd server && npm run dev   # http://localhost:5000
cd client && npm run dev   # http://localhost:5173
\`\`\`

## API routes

| Method | Route               | Auth        | Purpose                          |
|--------|----------------------|-------------|-----------------------------------|
| GET    | `/api/products`       | —           | List all products (supports `?featured=true`) |
| GET    | `/api/products/:id`   | —           | Get a single product              |
| POST   | `/api/products`       | `x-api-key` | Add a new product                 |
| POST   | `/api/contact`        | —           | Submit the contact form           |

Admin-protected routes require an `x-api-key` header matching `ADMIN_API_KEY`.

## Status

- [x] Frontend: Home, Atelier, Product Detail, Contact, 404
- [x] Backend: product routes, contact route, admin-protected product creation
- [x] Database: PostgreSQL + Prisma, migrated and seeded
- [ ] Contact form email delivery (pending Gmail credentials)
- [ ] Real product photography
- [ ] Deployment