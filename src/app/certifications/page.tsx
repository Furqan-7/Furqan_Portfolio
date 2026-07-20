import type { Metadata } from 'next';
import CertificationsContent from './CertificationsContent';

export const metadata: Metadata = {
  title: 'Certifications & Credentials | Furqan Bodarni',
  description: "Explore the verified technical certifications, hackathon achievements, and professional qualifications of Furqan Bodarni in AI, Machine Learning, and Full Stack Development.",
  openGraph: {
    title: 'Certifications & Credentials | Furqan Bodarni',
    description: "Explore the verified technical certifications, hackathon achievements, and professional qualifications of Furqan Bodarni.",
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Furqan Bodarni Certifications',
      }
    ],
  }
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
