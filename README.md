iTechiee LLP – Official Website (React + Vite + CSS Modules)

This is the official website for iTechiee LLP, built using React, Vite, and CSS Modules.
It includes all company sections such as:

Landing / Hero

About

Services

Projects

Research & Development

Contact (with Email sending support via EmailJS)

Footer

The website is fully responsive and styled using the modern dark-neon theme from the design.

🚀 Tech Stack
Technology	Usage
React 18	UI Components
Vite	Development & Bundling
CSS Modules	Component-scoped styling
EmailJS	Sending emails from Contact Form
JavaScript (ES2020+)	App Logic
📁 Project Structure
itechiee-llp-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── global.css              # Global styling
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Projects.jsx
│       ├── RnD.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── *.module.css        # CSS Modules for each component

⚙️ Installation & Setup
1️⃣ Install Node.js

If not installed, download from:
👉 https://nodejs.org/en/download/prebuilt-installer

After installation:

node -v
npm -v


You should see versions like:

node v18 or v20
npm v9 or v10

2️⃣ Install dependencies

Open a terminal inside the project folder:

cd itechiee-llp-react
npm install

3️⃣ Run the development server
npm run dev


The app will be available at:

http://localhost:5173/

📬 EmailJS Setup (For Contact Form)

The project supports email sending using EmailJS.

Follow these steps:

Step 1: Create EmailJS Account

https://www.emailjs.com

Step 2: Add an Email Service

Choose Gmail or custom SMTP.

You will obtain:

SERVICE_ID

Step 3: Create a Template

Template variables needed:

name
email
subject
message


Set your receiving email as:

📥 hariprabhakaran.70@gmail.com

You will receive:

TEMPLATE_ID

Step 4: Get Your Public Key

EmailJS Dashboard → Account → API Keys → Public Key

Step 5: Update Contact.jsx

Open:

src/components/Contact.jsx


Replace:

const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";


With your actual values.

📦 Build for Production
npm run build


This generates a dist/ folder containing static files.

You can deploy this anywhere:

Netlify

Vercel

GitHub Pages

AWS S3

Apache / Nginx hosting

cPanel hosting

🌐 Deployment Guide
Deploy to Netlify (Recommended — easiest)

Run:

npm run build


Go to https://app.netlify.com

Click Add new site → Deploy manually

Drag and drop the dist/ folder

Done! Your website is live.

Deploy to Vercel
npm install -g vercel
vercel


Select folder → choose dist/ as output directory.

🧹 Troubleshooting
❌ 'vite' is not recognized

Run:

npm install


Or:

npx vite

❌ "Failed to send" (Contact form)

Possible reasons:

EmailJS service/template/public key incorrect

EmailJS domain whitelist missing:
Add http://localhost:5173 in EmailJS dashboard

Template variables mismatch

© Copyright

© iTechiee LLP
All rights reserved.
