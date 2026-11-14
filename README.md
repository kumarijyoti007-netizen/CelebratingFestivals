# spreadingFestives

Multilingual cultural monographs exploring the historical significance, region-by-region local customs, and celebratory food recommendations of festivals in **English**, **Hindi (हिन्दी)**, and any **Mother Tongue**.

## Project Structure

- `src/` — React + TypeScript + Tailwind CSS frontend
- `api/festival.ts` — Vercel Serverless Function endpoint (`POST /api/festival`)
- `lib/festivalService.ts` — Shared Gemini API monograph generator (`@google/genai`)
- `server.ts` — Express + Vite dev/production server for local or container hosting
- `vercel.json` — Vercel build, function duration, and SPA routing configuration

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` from `.env.example` and add your key:
   ```env
   GEMINI_API_KEY="your_gemini_api_key"
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deploying to Vercel via GitHub

1. **Push this project to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: spreadingFestives"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and select your GitHub repository.
   - Framework Preset will automatically detect **Vite** (configured in `vercel.json`).
3. **Add Environment Variable in Vercel**:
   - Under **Settings → Environment Variables**, add:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: Your Gemini API key
4. **Deploy**:
   - Click **Deploy**. Vercel builds the static frontend (`dist/`) and deploys `/api/festival` as a Serverless Function.
