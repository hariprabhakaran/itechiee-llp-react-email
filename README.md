# iTechiee LLP – Official Website (React + Vite + CSS Modules)

This is the official website for **iTechiee LLP**, built using **React**, **Vite**, and **CSS Modules**.  
It includes all company sections:

- Home / Hero  
- About  
- Services  
- Projects  
- Research & Development  
- Contact (Email sending via EmailJS)  
- Footer  

The website uses a modern dark-neon UI theme.

---

## Technology Stack

| Technology | Purpose |
|-----------|----------|
| React 18 | UI Components |
| Vite | Dev Server + Bundler |
| CSS Modules | Component-scoped styling |
| EmailJS | Contact form email sending |

---

## Project Structure

```
itechiee-llp-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── global.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Projects.jsx
│       ├── RnD.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── *.module.css
```

---

## Installation Instructions

### Step 1: Install Node.js

Download the LTS version from:  
https://nodejs.org/en/download/prebuilt-installer

Verify installation:

```
node -v
npm -v
```

---

### Step 2: Install project dependencies

```
npm install
```

---

### Step 3: Run the development server

```
npm run dev
```

The app will be available at:

```
http://localhost:5173/
```

---

## EmailJS Setup (for the Contact Form)

The Contact form uses **EmailJS** to send emails directly from the client.

### 1. Create EmailJS Account  
https://www.emailjs.com

### 2. Add an Email Service  
Choose Gmail or SMTP.  
Get your **SERVICE_ID**.

### 3. Create a Template  
Required template variables:

```
name
email
subject
message
```

Set the "To" email address as:

```
hariprabhakaran.70@gmail.com
```

Get your **TEMPLATE_ID**.

### 4. Get your Public Key  
From EmailJS → Account → API Keys → Public Key.  
Get your **PUBLIC_KEY**.

### 5. Add EmailJS keys to the project

Open:

```
src/components/Contact.jsx
```

Replace:

```js
const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
```

With your actual EmailJS keys.

---

## Production Build

Run:

```
npm run build
```

This generates a `dist/` folder with static production files.

---

## Deployment Instructions

You can deploy the built site anywhere:

### Deploy to Netlify

1. Build project:

```
npm run build
```

2. Go to https://app.netlify.com  
3. Click "Add New Site" → "Deploy manually"  
4. Upload the `dist/` folder  
5. Done

---

### Deploy to Vercel

Install Vercel CLI:

```
npm install -g vercel
```

Deploy:

```
vercel
```

Choose `dist` as the output folder.

---

## Troubleshooting

### Error: `'vite' is not recognized`
Fix:

```
npm install
```

Or run:

```
npx vite
```

---

### Error: “Failed to send. Please try again later.”
Causes:

- Wrong SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY  
- Template variables mismatch  
- EmailJS "Allowed Origins" missing (add `http://localhost:5173`)  
- Using Private Key instead of Public Key  

---

## Copyright

© iTechiee LLP  
All rights reserved.

