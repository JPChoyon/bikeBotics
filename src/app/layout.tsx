import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BikeBotics - Precision Bike Servicing",
  icons: {
    icon: "/favicon.ico",
  },
  description: `At BikeBotics, we blend expert bike servicing with modern technology to keep your ride smooth, safe, and performance-ready. Whether you're a daily commuter, weekend rider, or competitive cyclist, our precision-driven maintenance, diagnostics, and repair services are designed to meet the demands of every rider.

With smart tracking, real-time updates, and expert mechanics, BikeBotics is not just a repair shop — it's your personal bike performance lab. Ride smarter. Ride longer. Ride with BikeBotics.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
