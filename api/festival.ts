import { generateFestivalMonograph } from '../lib/festivalService.ts';

interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
  end: () => void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  let payload: Record<string, unknown> = {};
  if (typeof req.body === 'string') {
    try {
      payload = JSON.parse(req.body) as Record<string, unknown>;
    } catch {
      return res.status(400).json({ error: 'Invalid JSON request body.' });
    }
  } else if (req.body && typeof req.body === 'object') {
    payload = req.body as Record<string, unknown>;
  }

  const result = await generateFestivalMonograph(
    payload.festivalName,
    payload.motherTongue
  );

  return res.status(result.status).json(result.body);
}
