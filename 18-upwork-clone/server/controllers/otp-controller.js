import dotenv from "dotenv"
dotenv.config()
import nodemailer from "nodemailer"

const otpStore = {}

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

function generateBodyHTML({ firstName = "", otp }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * {
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            box-sizing: border-box;
            font-size: 16px;
            letter-spacing: 0.8px;
          }

        </style>
      </head>
      <body>
        <div class="container" style="width: 100%;">
          <header style="
            padding: 15px 0;
            margin-bottom: 20px;
            border-bottom: 1px solid green;
          ">
            <a href="http://localhost:5173/" target="_blank">
              <img src="https://i.ibb.co/9HFCdW7k/logo.png" border="0" style="width: 100px;" />
            </a>
          </header>
          <main style="
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            letter-spacing: 0.7px;
          ">
            <h3 style="
              font-size: 20px !important;
              margin-bottom: 20px;
            ">Password reset request</h3>

            <p style="
              margin-bottom: 15px;
            ">Hi ${firstName || "there"},</p>

            <p>
              The 6-digits OTP(one-time-password) is
              <span class="otp-span" style="
                color: rgb(0, 133, 0);
                font-size: 18px !important;
                letter-spacing: 2px !important;
                margin-top: 5px;
              ">${otp}</span>
              (valid for 10 minutes)
            </p>

            <p style="
              color: red;
              margin-top: 25px;
              font-size: 12px;
            ">
              **Disclaimer: This is not real Upwork platform, I am building this only to practice my skills.**
            </p> 
          </main>
        </div>
      </body>
    </html>
  `
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.PRIMARY_GMAIL,
    pass: process.env.PRIMARY_GMAIL_APP_PASS,
  },
})

export async function sendOTP(req, res, next) {
  const otp = generateOTP()
  const info = await transporter.sendMail({
    from: `Upwork clone <${process.env.PRIMARY_GMAIL}>`,
    to: "harshan2412005@gmail.com",
    subject: "Password reset request",
    text: `
      Hi there,

      The 6-digits OTP(one-time-password) is ${otp} (valid for 10 minutes)

      **Disclaimer: Hello there, this is Harshan from India. This is not real Upwork platform, I am building this only to practice my skills.**
    `,
    html: generateBodyHTML({ otp }),

    // attachments: {
    //   path: "public/logo.png",
    //   cid: "upworkLogo",
    // },
  })

  res.sendStatus(200)
  console.log("Message sent:", info.messageId)
}
