import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
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
  try {
    const portraits: Portrait[] = await request.json();
    console.log(`[portraits PUT] Saving ${portraits.length} portraits, payload size: ${JSON.stringify(portraits).length} bytes`);
    await writeBlobJson("portraits.json", portraits);
    console.log("[portraits PUT] writeBlobJson succeeded");
    revalidatePath("/");
    revalidatePath("/the-portraits");
    revalidatePath("/the-project");
    revalidatePath("/the-team");
    revalidatePath("/the-method");
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[portraits PUT] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
