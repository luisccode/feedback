import "@/ui/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Your feedback is important to us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
