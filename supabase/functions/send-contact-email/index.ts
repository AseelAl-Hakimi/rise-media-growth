const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    console.log("Received contact form submission from:", email);

    // Send notification email to RiseMediaTV
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "RiseMediaTV <onboarding@resend.dev>",
        to: ["risemediatvmgmt@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h1 style="color: #FF3B3B;">New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <h2>Message</h2>
            <p>${message}</p>
          </div>
        `,
      }),
    });

    console.log("Notification sent:", await notificationRes.json());

    // Send confirmation to user
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "RiseMediaTV <onboarding@resend.dev>",
        to: [email],
        subject: "We received your message! - RiseMediaTV",
        html: `
          <div style="font-family: Arial; background: #0A0A0A; color: #fff; padding: 40px;">
            <h1 style="color: #FF3B3B;">Thank you, ${name}!</h1>
            <p style="color: #999;">We've received your message and will get back to you within 24 hours.</p>
            <a href="https://calendly.com/risemediatvmgmt/30min" style="display: inline-block; background: #FF3B3B; color: #fff; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin-top: 20px;">Book a Free Strategy Call</a>
          </div>
        `,
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});