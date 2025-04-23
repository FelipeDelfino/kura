// src/app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY2);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, brand, email, phone, message } = body;

    await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: 'felipe.delfino1508@gmail.com',
      subject: 'Novo formulário de contato',
      html: `
        <h3>Contato recebido via site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Marca:</strong> ${brand}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, status: 'OK' });
  }
  catch (error: unknown) {
    console.error('[Resend Error]', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Erro desconhecido' }, { status: 500 });
  }
}