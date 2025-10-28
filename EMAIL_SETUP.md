# 📧 Contact Form Email Setup

## ✅ What Was Done

Created a working backend API that sends emails directly to **azamiqra178@gmail.com** when users submit the contact form.

### Files Created/Updated:
1. ✅ `app/api/contact/route.ts` - Backend API endpoint
2. ✅ `components/sections/ContactSection.tsx` - Updated to use API
3. ✅ `.env.local` - Environment variables file

---

## 🚀 Setup Instructions (Required)

To make the contact form send emails to your inbox, follow these steps:

### Step 1: Get Free Web3Forms API Key

1. Go to **https://web3forms.com**
2. Click "Get Started Free" or "Create Access Key"
3. Enter your email: **azamiqra178@gmail.com**
4. Check your email for the verification link
5. Click the verification link
6. Copy your **Access Key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add API Key to Your Project

1. Open the file: `C:\Users\Admin\IQRA\.env.local`
2. Replace `your_access_key_here` with your actual access key
3. Save the file

**Example:**
```
NEXT_PUBLIC_WEB3FORMS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

### Step 3: Restart Your Development Server

```powershell
# Stop the current server (press Ctrl+C in the terminal where it's running)
# Then start it again:
cd "C:\Users\Admin\IQRA"
npm run dev
```

---

## 🧪 How to Test

1. **Open your contact page**: http://localhost:3001/contact
2. **Fill in the form** with:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
3. **Click "Send Message"**
4. **Wait for success**: You should see "✅ Message Sent!"
5. **Check your email**: Go to **azamiqra178@gmail.com** inbox

You should receive an email with:
- **From**: Portfolio Website
- **Subject**: Portfolio Contact from Test User
- **Body**: The message content
- **Reply-To**: test@example.com

---

## 🎯 How It Works

1. User fills out the form and clicks "Send Message"
2. Form data is sent to `/api/contact` endpoint
3. Backend API forwards the email to Web3Forms service
4. Web3Forms sends the email to **azamiqra178@gmail.com**
5. You receive the email in your inbox!

---

## 📝 Features

✅ Sends emails directly to your inbox (azamiqra178@gmail.com)
✅ No email client needed
✅ Works on all devices
✅ Free service (up to 250 emails/month)
✅ Form validation
✅ Loading states (Sending, Success, Error)
✅ Auto-resets after 3 seconds

---

## 🔧 Alternative: Gmail SMTP (Optional)

If you prefer using Gmail directly, you can set up SMTP:

1. Install nodemailer: `npm install nodemailer`
2. Enable "App Passwords" in your Gmail settings
3. Update the API route to use nodemailer

Let me know if you want to use Gmail SMTP instead!

---

## 🆘 Troubleshooting

**If emails aren't sending:**

1. Check that you added the API key to `.env.local`
2. Make sure you restarted the dev server after adding the key
3. Check browser console for errors (F12 > Console tab)
4. Verify your Web3Forms account is verified
5. Check spam/junk folder in your email

**Still not working?**
- The form will show an error message if something goes wrong
- Check the terminal/console for error logs
- Make sure the `.env.local` file is in the root directory (`C:\Users\Admin\IQRA\`)

---

## 📊 Summary

**Before**: Form opened email client (didn't send directly)
**After**: Form sends emails directly to **azamiqra178@gmail.com** ✅

Just get your Web3Forms API key and you're ready to receive contact form submissions!
