# NextJS + Neon PostgreSQL Demo

This is a Next.js project that demonstrates connecting to a Neon PostgreSQL database.

## Database Setup

The application connects to a Neon PostgreSQL database with a simple table called `ids`.

### Database Schema

```sql
CREATE TABLE ids (
  id SERIAL PRIMARY KEY
);

-- Insert sample data
INSERT INTO ids (id) VALUES (1), (2), (3);
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variables (Just put what vercel has in the .env file)

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## File Structure

- `app/page.tsx` - Main page with database demo
- `app/api/ids/route.ts` - API route for database operations
- `lib/db.ts` - Database connection and query utilities
- `.env.local` - Environment variables (create from .env.example)
