import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ResponsiveBG } from '@/components/particles';
import { ThemeProvider } from '../components/theme-switcher/theme-provider';
import GradientOverlay from '@/components/gradient';

// React DevTools is recommended for better development experience
// Install at: https://reactjs.org/link/react-devtools

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huzaifa Zafar - Software Engineer & React Developer',
  description:
    'Welcome to the portfolio of Huzaifa Zafar, a software engineer specializing in frontend development with React and NextJS. Explore my projects, skills, work experience, and more.',
  keywords: [
    'Huzaifa Zafar',
    'Software Engineer',
    'React Developer',
    'NextJS',
    'AWS',
    'Next.js',
    'React',
    'JavaScript',
    'NodeJS',
    'Typescript',
    'MERN Stack',
    'Portfolio',
    'Projects',
    'Web Development',
    'Frontend Developer',
    'Islamabad',
  ],
  referrer: 'origin-when-cross-origin',
  authors: [
    { name: 'Huzaifa Zafar', url: 'https://github.com/huzaifa-zafar-repo' },
  ],
  openGraph: {
    title: 'Huzaifa Zafar - Software Engineer & React Developer',
    description:
      'Explore the professional portfolio of Huzaifa Zafar, featuring his work experience, projects, skills, and contact information.',
    url: 'https://huzaifa-zafar.com',
    type: 'website',
    images: [
      {
        url: 'https://huzaifa-zafar.com/profile-image.jpg',
        width: 800,
        height: 600,
        alt: 'Huzaifa Zafar Profile Picture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@huzaifa-zafar',
    title: 'Huzaifa Zafar - Software Engineer & React Developer',
    description:
      'Welcome to the professional portfolio of Huzaifa Zafar. Discover his projects, skills, and work experience in web development.',
    images: 'https://huzaifa-zafar.com/profile-image.jpg',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed inset-0 pointer-events-none">
            <ResponsiveBG />
          </div>
          <GradientOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
