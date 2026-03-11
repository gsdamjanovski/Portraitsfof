import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { readBlobJson, writeBlobJson } from "@/lib/blob";
import { getSiteCopy } from "@/lib/data";
import type { SiteCopy } from "@/lib/types";

export async function GET() {
  const copy = await getSiteCopy();
  return NextResponse.json(copy);
}

export async function PUT(request: NextRequest) {
  const copy: SiteCopy = await request.json();
  await writeBlobJson("site-copy.json", copy);
  revalidateTag("site-copy", { expire: 0 });
  return NextResponse.json({ success: true });
}
