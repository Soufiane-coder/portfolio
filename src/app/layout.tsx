import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer.component";
import NavBar from "@/components/nav-bar.component";
import Script from "next/script";
import Provider from "./template";
import ParticlesContainer from "@/components/particles-container.component";

const montserrat =  Montserrat({ 
  subsets: ["latin"],
  variable: '--font-mont'
});

export const metadata: Metadata = {
  title: "Soufiane AMIMI",
  description: "a resume of my competence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <head>
      <Script id='theme-switcher' strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
        </Script>
      </head>
      
      <body className={montserrat.className}>
        
       
          <main className='font-mont bg-light w-full min-h-screen dark:bg-dark'>
            <NavBar/>
            
              {children}
            <Footer/>
          </main>
        
      </body>
    </html>
  );
}
