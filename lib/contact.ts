import { z } from "zod";
import { Resend } from "resend";

const resendFromEmail = "GG Agency <onboarding@resend.dev>";

export const inquiryTypes = [
  "Brand / Campaign",
  "Event Appearance",
  "Casting",
  "Global Partnership",
  "Other"
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  country: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  inquiryType: z.enum(inquiryTypes).optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  timeZone: z.string().optional(),
  message: z.string().min(10, "Please enter at least 10 characters."),
  website: z.string().max(0, "Spam check failed.").optional()
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const applySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  age: z.string().trim().min(1, "Please enter your age."),
  residence: z.string().trim().min(1, "Please enter where you live."),
  message: z.string().trim().min(1, "Please enter your application message."),
  website: z.string().max(0, "Spam check failed.").optional()
});

export type ApplyFormValues = z.infer<typeof applySchema>;

export async function deliverContact(values: ContactFormValues) {
  return deliverEmail({
    replyTo: values.email,
    subject: "GG Agency 企業問い合わせ",
    text: buildContactEmailText(values),
    html: buildContactEmailHtml(values)
  });
}

export async function deliverApply(values: ApplyFormValues) {
  return deliverEmail({
    replyTo: values.email,
    subject: "GG Agency モデル応募",
    text: buildApplyEmailText(values),
    html: buildApplyEmailHtml(values)
  });
}

async function deliverEmail({
  html,
  replyTo,
  subject,
  text
}: {
  html: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  const deliveryMode = process.env.CONTACT_DELIVERY_MODE;
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (deliveryMode !== "resend") {
    throw new Error("CONTACT_DELIVERY_MODE must be set to resend.");
  }

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!contactEmail) {
    throw new Error("CONTACT_EMAIL is not configured.");
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: resendFromEmail,
    to: contactEmail,
    replyTo,
    subject,
    text,
    html
  });

  if (error) {
    throw new Error(error.message || "Email delivery failed.");
  }

  return {
    ok: true,
    id: data?.id
  };
}

function buildContactEmailText(values: ContactFormValues) {
  return [
    "A new inquiry was submitted from the GG Agency website.",
    "",
    `Name: ${values.name}`,
    `Company / Brand: ${values.company || "-"}`,
    `Country: ${values.country || "-"}`,
    `Email: ${values.email}`,
    `Inquiry type: ${values.inquiryType || "-"}`,
    `Budget range: ${values.budgetRange || "-"}`,
    `Timeline: ${values.timeline || "-"}`,
    `Time zone: ${values.timeZone || "-"}`,
    "",
    "Message:",
    values.message
  ].join("\n");
}

function buildContactEmailHtml(values: ContactFormValues) {
  const rows: Array<[string, string | undefined]> = [
    ["Name", values.name],
    ["Company / Brand", values.company],
    ["Country", values.country],
    ["Email", values.email],
    ["Inquiry type", values.inquiryType],
    ["Budget range", values.budgetRange],
    ["Timeline", values.timeline],
    ["Time zone", values.timeZone]
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <p>A new inquiry was submitted from the GG Agency website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border: 1px solid #ddd; padding: 8px; text-align: left; width: 180px;">${escapeHtml(label)}</th>
                  <td style="border: 1px solid #ddd; padding: 8px;">${escapeHtml(value || "-")}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin-top: 24px;">Message</h2>
      <p style="white-space: pre-wrap;">${escapeHtml(values.message)}</p>
    </div>
  `;
}

function buildApplyEmailText(values: ApplyFormValues) {
  return [
    "A new model application was submitted from the GG Agency website.",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Age: ${values.age}`,
    `Residence: ${values.residence}`,
    "",
    "Message:",
    values.message
  ].join("\n");
}

function buildApplyEmailHtml(values: ApplyFormValues) {
  const rows: Array<[string, string | undefined]> = [
    ["Name", values.name],
    ["Email", values.email],
    ["Age", values.age],
    ["Residence", values.residence]
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <p>A new model application was submitted from the GG Agency website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border: 1px solid #ddd; padding: 8px; text-align: left; width: 180px;">${escapeHtml(label)}</th>
                  <td style="border: 1px solid #ddd; padding: 8px;">${escapeHtml(value || "-")}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin-top: 24px;">Application message</h2>
      <p style="white-space: pre-wrap;">${escapeHtml(values.message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}
