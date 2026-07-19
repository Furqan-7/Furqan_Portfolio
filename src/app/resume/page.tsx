import type { Metadata } from 'next';
import ResumePageContent from './ResumePageContent';

export const metadata: Metadata = {
  title: 'Resume | Furqan Bodarni',
  description: "View, download, or print Furqan Bodarni's professional resume. Full Stack & AI Developer specializing in high-performance web applications and AI/ML integrations.",
  openGraph: {
    title: 'Resume | Furqan Bodarni',
    description: "View, download, or print Furqan Bodarni's professional resume.",
    type: 'profile',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Furqan Bodarni Resume',
      }
    ],
  }
};

export default function ResumePage() {
  return <ResumePageContent />;
}
