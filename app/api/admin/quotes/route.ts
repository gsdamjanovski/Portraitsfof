import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
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
  revalidatePath("/");
  return NextResponse.json({ success: true });
}
