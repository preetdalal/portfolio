# Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Content

All project and tech-stack content lives in `lib/data.ts`. Update projects,
links, and stack categories there rather than editing components directly.

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Still to wire up

- CI/CD (GitHub Actions): run lint/build on push, then build and push the
  Docker image
- A real cloud deploy target beyond Render/Vercel free tiers
