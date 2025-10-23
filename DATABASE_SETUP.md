# Database Setup Guide

This project uses Prisma with SQLite for local development.

## Initial Setup

1. **Install dependencies** (if not already done):
   \`\`\`bash
   npm install
   \`\`\`

2. **Generate Prisma Client**:
   \`\`\`bash
   npx prisma generate
   \`\`\`

3. **Create and migrate the database**:
   \`\`\`bash
   npx prisma migrate dev --name init
   \`\`\`

4. **Initialize the database with default data**:
   \`\`\`bash
   npx tsx scripts/init-db.ts
   \`\`\`

5. **Optionally, seed demo data**:
   \`\`\`bash
   npx tsx scripts/seed-demo-data.ts
   \`\`\`

## Default Credentials

After running the initialization script, you can log in with:

**Admin Account:**
- Email: `admin@vdshub.com`
- Password: `admin123`

**Demo User Account (after seeding):**
- Email: `demo@example.com`
- Password: `demo123`

## Database Management

### View database in Prisma Studio:
\`\`\`bash
npx prisma studio
\`\`\`

### Reset database (WARNING: deletes all data):
\`\`\`bash
npx prisma migrate reset
\`\`\`

### Create a new migration after schema changes:
\`\`\`bash
npx prisma migrate dev --name your_migration_name
\`\`\`

## Database Location

The SQLite database file is located at:
\`\`\`
prisma/dev.db
\`\`\`

This file is gitignored and will be created automatically when you run migrations.
