import { TCard } from '@/types/types';
// export type TCard = {
//   posterImage: string;
//   title: string;
//   category: string;
//   description: string;
//   liveUrl?: string;
//   githubUrl?: string;
//   videoDemoUrl?: string;
//   techstack: string[];
// };
export const projectData: TCard[] = [
  {
    category: 'Design Agency',
    title: 'GDM Design Agency',
    posterImage: '/projects/gdm-design-agency.png',
    description: `A modern, fully responsive Design Agency website built to showcase creative services, portfolio, and client engagement. This website is designed for a creative design agency that provides branding, graphic design, web design, and marketing solutions. It highlights the agency's work, services, and team in a visually engaging format to attract potential clients. Features include modern clean design, fully responsive layout, fast loading, SEO-friendly structure, interactive UI with smooth animations, and comprehensive portfolio showcase.`,
    techstack: [
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'JavaScript',
      'React',
      'Vite.js',
      'Netlify',
    ],
    liveUrl: 'https://global-dmart.netlify.app/',
    githubUrl: 'https://github.com/huzaifa-zafar-repo/Website-for-GDM',
  },

{
  category: 'Personal Project',
  title: 'Animated Travel Slides',
  posterImage: '/projects/animated-slides.webp',
  description: `An interactive animated slides showcase featuring beautiful travel destinations with smooth transitions and engaging animations. Built with modern web technologies to create an immersive user experience for exploring popular travel locations.`,
  techstack: [
    'NextJS',
    'React',
    'Framer Motion',
    'TailwindCSS',
  ],
  liveUrl: 'https://huzzii-animated-slides.vercel.app/',
  githubUrl: '',
},

  {
    category: 'Ecommerce Project',
    title: 'InteriorFilm',
    posterImage: '/projects/afroboost.webp',
    description: `InteriorFilm is a luxury e-commerce platform offering high-end home decor solutions, including flooring and architectural services. Designed and implemented responsive components, dashboards for admin management, and secured backend endpoints for multi-role access. This project deepened my expertise in Redux Toolkit for state management and implementing scalable backend solutions.`,
    techstack: [
      'Redux',
      'Redux Thunk',
      'React Query',
      'NextJS',
      'TailwindCSS',
      'MongoDB',
      'Express.js',
    ],
    liveUrl: 'https://interiorfilm.ae',
  },
  {
    category: 'Ecommerce Project',
    title: 'Avenue39',
    posterImage: '/projects/animated-slides.webp',
    description: `Avenue39 is an e-commerce platform designed for a seamless furniture shopping experience. Developed both the backend (NestJS, Prisma, PostgreSQL) and frontend (Next.js) to ensure a robust and user-friendly system. Added key features like JWT-based authentication, dynamic cart management, and real-time data fetching. This project significantly enhanced my understanding of enterprise-level full-stack development.`,
    techstack: [
      'NestJS',
      'TypeScript',
      'NextJS',
      'TailwindCSS',
      'Prisma ORM',
      'PostgreSQL',
      'JWT',
      'Redux',
      'React Query',
    ],
    liveUrl: 'https://avenue39.com/',
  },
  {
    category: 'Booking Platform',
    title: 'Dr. Kate Beauty',
    posterImage: '/projects/dashboard.webp',
    description: `Dr. Kate Beauty is an appointment booking system integrated with an online luxury beauty store. Built the frontend for a seamless user experience, handled server deployment, and added booking flow management features. Gained hands-on experience in developing scalable booking systems and integrating e-commerce functionalities.`,
    techstack: [
      'React.js',
      'TailwindCSS',
      'CSS',
      'Frontend Development',
      'MVC Architecture',
    ],
    liveUrl: 'https://drkatebeauty.co.uk/',
  },
  {
    category: 'AI Project | Personal',
    title: 'AskPDF - AI Document Assistant',
    posterImage: '/projects/gdm-design-agency.png',
    description: `AskPDF is an intelligent document assistant that allows users to upload PDFs and ask questions about the content. Built with advanced AI technology, it analyzes documents and provides accurate answers based on the uploaded content. The platform features a clean interface for document management, real-time question-answering, and supports multiple document formats. This project demonstrates expertise in AI integration, document processing, and creating user-friendly AI-powered applications.`,
    techstack: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'OpenAI API',
      'PDF Processing',
      'Vector Database',
      'TailwindCSS',
    ],
    liveUrl: 'https://askpdf.mujtabacodes.com/',
  },
];
