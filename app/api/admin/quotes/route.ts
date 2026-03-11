import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { readBlobJson, writeBlobJson } from "@/lib/blob";
import { quotes as defaultQuotes } from "@/data/quotes";
import type { Quote } from "@/lib/types";

export async function GET() {
  const quotes = await readBlobJson<Quote[]>(
    "quotes.json",
    defaultQuotes as Quote[]
  );
  return NextResponse.json(quotes);
}

export async function PUT(request: NextRequest) {
  const quotes: Quote[] = await request.json();
  await writeBlobJson("quotes.json", quotes);
  revalidateTag("quotes", { expire: 0 });
  return NextResponse.json({ success: true });
}
