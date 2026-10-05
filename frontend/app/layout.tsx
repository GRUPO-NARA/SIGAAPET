import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIGAAPET | Animais do campus",
  description: "Catálogo de animais em situação de abandono encontrados no campus da UEMA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
