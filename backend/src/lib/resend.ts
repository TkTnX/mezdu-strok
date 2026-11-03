import { configDotenv } from 'dotenv';
import { Resend } from 'resend';

configDotenv()
const resend = new Resend(process.env.RESEND_API_KEY);

export async function emailTemplate(to: string, subject:string, html:string) {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to,
    subject,
    html,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}
