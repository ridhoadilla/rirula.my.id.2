# Professional Portfolio - Ridho Nurul Adilla

Welcome to the source code for my professional portfolio!

This is a modern web application built with **Next.js (App Router)** and **Vanilla CSS**. It showcases my experience, technical projects, skills, and certifications as a Cloud & Observability Engineer.

## Technologies Used

- **Next.js**: Framework for React, configured for Static Export.
- **Vanilla CSS**: Used for all styling (glassmorphism, dark mode, custom animations).
- **Chart.js & React-Chartjs-2**: For rendering the interactive Skill Proficiency Matrix.

## Running Locally

To run the development server locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (GitHub Pages)

This project uses Next.js Static Export (`output: 'export'`). 
To deploy this to GitHub Pages:
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
3. Use the official Next.js GitHub Action workflow to build and deploy the `out/` directory automatically.
