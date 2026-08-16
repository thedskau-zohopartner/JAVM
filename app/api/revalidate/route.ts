import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { CASE_STUDY_TAG } from "../../../sanity/lib/client";

export async function POST(req: NextRequest) {
  const { isValidSignature, body } = await parseBody<{ _type?: string }>(
    req,
    process.env.SANITY_REVALIDATE_SECRET,
  );

  if (!isValidSignature) {
    return new Response("Invalid signature", { status: 401 });
  }

  if (!body?._type) {
    return new Response("Missing _type in webhook payload", { status: 400 });
  }

  revalidateTag(CASE_STUDY_TAG, "max");

  return NextResponse.json({ revalidated: true, tag: CASE_STUDY_TAG });
}
