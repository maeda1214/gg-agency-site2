import { NextResponse } from "next/server";
import { contactSchema, deliverContact } from "@/lib/contact";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  try {
    const result = await deliverContact(parsed.data);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Contact delivery failed", error);

    return NextResponse.json({ ok: false, message: "Delivery failed" }, { status: 502 });
  }
}
