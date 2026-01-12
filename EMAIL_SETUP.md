# Email Setup Instructions

The contact form uses EmailJS to send emails directly to `jatin.khanna@gamyam.co`.

## Setup Steps:

1. **Create an EmailJS account** at https://www.emailjs.com/

2. **Create an Email Service**:
   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - User's name
     - `{{from_email}}` - User's email
     - `{{phone}}` - User's phone number
     - `{{message}}` - User's message
   - Set "To Email" to: `jatin.khanna@gamyam.co`
   - Set "From Name" to: `{{from_name}}`
   - Set "Reply To" to: `{{from_email}}`
   - Subject: `Contact Form Submission from {{from_name}}`
   - Content:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     
     Message:
     {{message}}
     ```

4. **Get your credentials**:
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
   - Public Key (from Account > General)

5. **Update the ContactUs component**:
   - Open `src/components/ContactUs/ContactUs.tsx`
   - Replace the placeholder values with your actual credentials:
     - `YOUR_SERVICE_ID` → Your Service ID
     - `YOUR_TEMPLATE_ID` → Your Template ID
     - `YOUR_PUBLIC_KEY` → Your Public Key

## Alternative: Using Environment Variables

For better security, you can use environment variables:

1. Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update the ContactUs component to use:
   ```typescript
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ```

