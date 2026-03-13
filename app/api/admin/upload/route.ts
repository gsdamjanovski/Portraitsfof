import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // This phase is called by the client — verify auth
        const token = request.cookies.get("admin-token")?.value;
        if (!token || !(await verifyToken(token))) {
          throw new Error("Unauthorized");
        }

        return {
          allowedContentTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
            "image/heic",
          ],
          maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ pathname }),
        };
      },
      onUploadCompleted: async () => {
        // Called by Vercel servers (no cookie) — no auth needed here
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Upload handler error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
