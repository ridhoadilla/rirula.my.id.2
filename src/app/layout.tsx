import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Ridho Nurul Adilla | Cloud & Observability Engineer',
  description: 'Professional Portfolio of Ridho Nurul Adilla - Cloud & Observability Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/img/other.ico" />
      </head>
      <body>
        <div className="layout-container">
          <nav className="sidebar">
            <Link href="/">
              <img
                src="/public/img/ridho-nurul-adilla.jpg"
                alt="Ridho Nurul Adilla"
                className="sidebar-profile"
              />
            </Link>
            <ul className="nav-menu">
              <li><Link href="/#about" className="nav-link">About</Link></li>
              <li><Link href="/#experience" className="nav-link">Experience</Link></li>
              <li><Link href="/project" className="nav-link">Projects</Link></li>
              <li><Link href="/#education" className="nav-link">Education</Link></li>
              <li><Link href="/#skills" className="nav-link">Skills</Link></li>
              <li><Link href="/#certifications" className="nav-link">Certifications</Link></li>
              <li><Link href="/#interests" className="nav-link">Interests</Link></li>
            </ul>
          </nav>
          <main className="main-content">
            {children}
          </main>
        </div>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C8XYSTSXR8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C8XYSTSXR8');
            `,
          }}
        />
      </body>
    </html>
  );
}
