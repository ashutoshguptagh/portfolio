import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashutosh Gupta | Full Stack Developer",
  description: "Portfolio of Ashutosh Gupta — Full Stack Developer specializing in Python, FastAPI, React, Next.js and AI/ML.",
  keywords: ["Ashutosh Gupta", "Full Stack Developer", "Python", "FastAPI", "Next.js", "AI/ML", "Ashutosh Gupta, Navi Mumbai"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var saved = localStorage.getItem('portfolio-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'light') document.documentElement.classList.add('light');
              } catch (e) {}
            })()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
