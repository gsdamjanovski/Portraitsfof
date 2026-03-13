import { put, list } from "@vercel/blob";

const DATA_PREFIX = "data/";

export async function readBlobJson<T>(key: string, fallback: T): Promise<T> {
  try {
    // List blobs with the exact prefix to find the URL
    const { blobs } = await list({ prefix: `${DATA_PREFIX}${key}` });
    if (blobs.length === 0) return fallback;

    const res = await fetch(blobs[0].url, { cache: "no-store" });
    if (res.ok) return res.json();
  } catch {
    // Blob store not configured or network error — use fallback
  }
  return fallback;
}

export async function writeBlobJson(key: string, data: unknown): Promise<string> {
  const blob = await put(`${DATA_PREFIX}${key}`, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return blob.url;
}
