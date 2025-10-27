import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Northeast India Tourism - Explore the Incredible Northeast',
  description: 'Discover the hidden gems of Northeast India. Book authentic tour packages to Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Sikkim, and Tripura.',
  keywords: 'Northeast India, tourism, tour packages, Meghalaya, Assam, Sikkim, Arunachal Pradesh, Nagaland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
