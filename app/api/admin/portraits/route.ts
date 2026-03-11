import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { readBlobJson, writeBlobJson } from "@/lib/blob";
import { portraits as defaultPortraits } from "@/data/portraits";
import type { Portrait } from "@/lib/types";

export async function GET() {
  const portraits = await readBlobJson<Portrait[]>(
    "portraits.json",
    defaultPortraits as Portrait[]
  );
  return NextResponse.json(portraits);
}

export async function PUT(request: NextRequest) {
  const portraits: Portrait[] = await request.json();
  await writeBlobJson("portraits.json", portraits);
  revalidateTag("portraits", { expire: 0 });
  return NextResponse.json({ success: true });
}
