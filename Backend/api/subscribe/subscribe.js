import nodemailer from "nodemailer";

async function subscribeEmailHandler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { email } = req.body;

  try {
    const transpoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transpoter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Subscriber",
      html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Subscriber Alert</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #020617;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
      color: #e5e7eb;
    }

    .wrapper {
      width: 100%;
      padding: 32px 14px;
      box-sizing: border-box;
    }

    .container {
      max-width: 620px;
      margin: 0 auto;
      background: linear-gradient(180deg, #020617, #0f172a);
      border-radius: 16px;
      border: 1px solid rgba(20, 184, 166, 0.25);
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.7);
      overflow: hidden;
    }

    .header {
      padding: 24px 28px;
      background: linear-gradient(
        to right,
        rgba(20, 184, 166, 0.18),
        transparent
      );
      border-bottom: 1px solid rgba(20, 184, 166, 0.25);
    }

    .title {
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
    }

    .subtitle {
      font-size: 13px;
      margin-top: 6px;
      color: #94a3b8;
    }

    .content {
      padding: 28px;
    }

    .alert-box {
      background: rgba(2, 6, 23, 0.85);
      border-radius: 12px;
      padding: 18px;
      border: 1px solid rgba(20, 184, 166, 0.3);
    }

    .label {
      font-size: 12px;
      color: #94a3b8;
      margin-bottom: 6px;
    }

    .value {
      font-size: 15px;
      font-weight: 600;
      color: #14b8a6;
      word-break: break-all;
    }

    .divider {
      height: 1px;
      margin: 22px 0;
      background: linear-gradient(
        to right,
        transparent,
        rgba(20, 184, 166, 0.5),
        transparent
      );
    }

    .meta {
      font-size: 13px;
      color: #cbd5f5;
    }

    .footer {
      padding: 18px 24px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      background-color: #020617;
      border-top: 1px solid rgba(20, 184, 166, 0.15);
    }

    .footer strong {
      color: #e5e7eb;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">

      <div class="header">
        <p class="title">🚨 New Subscriber Alert</p>
        <p class="subtitle">
          A new user has subscribed to ScamPulse
        </p>
      </div>

      <div class="content">
        <div class="alert-box">
          <div class="label">Subscriber Email</div>
          <div class="value">${email}</div>

          <div class="divider"></div>

          <div class="meta">
            Subscription source: <strong>ScamPulse Website</strong><br />
            Timestamp: <strong>${new Date().toLocaleString()}</strong>
          </div>
        </div>
      </div>

      <div class="footer">
        ScamPulse Admin Notification<br />
        <strong>Action:</strong> No action required
      </div>

    </div>
  </div>
</body>
</html>

        `,
    });

    await transpoter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Thanks For Subscribing To ScamPulse",
      html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to ScamPulse</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0b0f19;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
      color: #e5e7eb;
    }

    .wrapper {
      width: 100%;
      padding: 40px 16px;
      box-sizing: border-box;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: linear-gradient(
        180deg,
        #0f172a 0%,
        #020617 100%
      );
      border-radius: 18px;
      border: 1px solid rgba(20, 184, 166, 0.25);
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
      overflow: hidden;
    }

    .header {
      padding: 32px;
      text-align: center;
      background: radial-gradient(
        circle at top,
        rgba(20, 184, 166, 0.25),
        transparent 70%
      );
    }

    .logo {
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: #14b8a6;
    }

    .logo span {
      color: #ffffff;
    }

    .content {
      padding: 36px 32px;
      line-height: 1.7;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 12px 0;
      color: #ffffff;
    }

    p {
      font-size: 15px;
      color: #cbd5f5;
      margin: 0 0 18px 0;
    }

    .highlight {
      color: #14b8a6;
      font-weight: 600;
    }

    .email-box {
      margin-top: 24px;
      padding: 16px;
      background: rgba(2, 6, 23, 0.8);
      border-radius: 12px;
      border: 1px dashed rgba(20, 184, 166, 0.4);
      text-align: center;
      font-size: 14px;
      color: #e2e8f0;
      word-break: break-all;
    }

    .divider {
      height: 1px;
      margin: 32px 0;
      background: linear-gradient(
        to right,
        transparent,
        rgba(20, 184, 166, 0.6),
        transparent
      );
    }

    .footer {
      padding: 22px 28px;
      font-size: 12px;
      text-align: center;
      color: #94a3b8;
      background-color: #020617;
    }

    .footer a {
      color: #14b8a6;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .content {
        padding: 28px 22px;
      }

      h1 {
        font-size: 22px;
      }
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">

      <div class="header">
        <div class="logo">
          Scam<span>Pulse</span>
        </div>
      </div>

      <div class="content">
        <h1>Thanks for subscribing 🚀</h1>

        <p>
          You have successfully subscribed to
          <span class="highlight">ScamPulse</span>.
          You are now part of our secure network and will receive
          important updates, fraud alerts, and early feature access.
        </p>

        <p>
          Stay ahead of scams with real-time intelligence and
          enterprise-grade protection.
        </p>

        <div class="email-box">
          <strong>Your registered email:</strong><br />
          ${email}
        </div>

        <div class="divider"></div>

        <p style="font-size: 13px; color: #94a3b8;">
          If this wasn’t you, you can safely ignore this email.
          No action is required.
        </p>
      </div>

      <div class="footer">
        © 2026 – ${new Date().getFullYear()}
        <a href="https://scampulse.com">ScamPulse</a>
        <br />
        Built with security & precision.
      </div>

    </div>
  </div>
</body>
</html>

        `,
    });

    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false });
  }
}

export default subscribeEmailHandler;
