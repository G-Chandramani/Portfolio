# EmailJS Setup Guide

This guide will help you configure EmailJS for the contact form to work properly.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Template Name:** Contact Form Template

**Subject:** New Contact from Portfolio: {{name}}

**Content:**
You can use the HTML template from EmailJS or create your own. The template should include these variables:

**Required Variables:**
- `{{name}}` - Sender's name
- `{{message}}` - The message content
- `{{time}}` - Timestamp (automatically added by the code)

**Optional Variables (for reply functionality):**
- `{{from_email}}` - Sender's email address
- `{{reply_to}}` - Reply-to email (same as from_email)

**Example HTML Template:**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">👤</div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

4. **Important:** Make sure the variable names match exactly:
   - `{{name}}` - Required
   - `{{message}}` - Required
   - `{{time}}` - Required (automatically sent)
   - `{{from_email}}` - Optional (for reply functionality)
   - `{{reply_to}}` - Optional (for reply functionality)

5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy your Public Key**

## Step 5: Create .env File

1. In your project root directory, create a file named `.env`
2. Add the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys from steps 2, 3, and 4

**Example:**
```env
VITE_APP_EMAILJS_SERVICE_ID=service_abc123
VITE_APP_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_APP_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Restart Development Server

After creating/updating the `.env` file:

1. Stop your development server (Ctrl+C)
2. Restart it with `npm run dev`
3. The environment variables will now be loaded

## Step 7: Test the Contact Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (and spam folder)
4. Check the browser console for any error messages
5. Check EmailJS dashboard → **Activity** to see if emails were sent

## Troubleshooting

### Emails not sending?

1. **Check browser console** - Look for error messages
2. **Verify .env file** - Make sure it's in the project root and has correct variable names
3. **Check EmailJS Dashboard** - Go to Activity to see error logs
4. **Verify Service Status** - Make sure your email service is connected and active
5. **Check Template Variables** - Ensure template variable names match exactly
6. **Restart Dev Server** - Environment variables only load on server start

### Common Errors:

- **"Email service is not configured"** - Your `.env` file is missing or variables are incorrect
- **"Invalid template ID"** - Template ID in `.env` doesn't match EmailJS dashboard
- **"Invalid service ID"** - Service ID in `.env` doesn't match EmailJS dashboard
- **"Invalid public key"** - Public key in `.env` is incorrect

### For Production Deployment:

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's settings
2. Variable names should be exactly:
   - `VITE_APP_EMAILJS_SERVICE_ID`
   - `VITE_APP_EMAILJS_TEMPLATE_ID`
   - `VITE_APP_EMAILJS_PUBLIC_KEY`
3. Redeploy your application

## Security Note

⚠️ **Never commit your `.env` file to Git!** It's already in `.gitignore` for security.

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their support section in the dashboard
