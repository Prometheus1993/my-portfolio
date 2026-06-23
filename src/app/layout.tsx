import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ChatAssistant from "@/components/ui/ChatAssistant";
import MotionProvider from "@/components/providers/MotionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import DitherBackground from "@/components/yorha/DitherBackground";
import GrainLayer from "@/components/yorha/GrainLayer";
import ScanlineOverlay from "@/components/yorha/ScanlineOverlay";
import BootSequence from "@/components/yorha/BootSequence";
import { CommandPaletteProvider } from "@/components/yorha/CommandPaletteContext";
import CommandPalette from "@/components/yorha/CommandPalette";
import { ChatProvider } from "@/components/chat/ChatContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// Body, legible, scannable case-study copy. Preloaded (critical path).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display, condensed grotesque, the YoRHa menu/heading voice. Preloaded.
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// Mono, HUD readouts, terminal nav, bracketed metadata. Mostly below-the-fold,
// so we self-host it but keep it off the critical preload path.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Jesus O'Bulan, Fullstack Developer",
  description:
    "Fullstack developer in Antwerp. I like building things that are put together well, and I use AI tools to build faster. Case studies in TypeScript, Next.js, Angular and .NET.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <DitherBackground />
        <CommandPaletteProvider>
          <ChatProvider>
            <SmoothScroll>
              <MotionProvider>
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
                <ScrollToTop />
                <ChatAssistant />
              </MotionProvider>
            </SmoothScroll>
            <CommandPalette />
          </ChatProvider>
        </CommandPaletteProvider>
        <GrainLayer />
        <ScanlineOverlay />
        <BootSequence />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
