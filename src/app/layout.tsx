import "./globals.css";
//import Script from "next/script";
import { Metadata } from "next";
import { Raleway, Architects_Daughter, Bowlby_One_SC } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { locale } from "moment";


export const metadata: Metadata = {
  metadataBase: new URL("https://clerk-next-app.vercel.app/"),
  title: "8zense.com",
  description:
    "A simple and powerful Next.js template featuring authentication and user management powered by Clerk.",
  openGraph: { images: ["/LogoEZ990.svg"] },
};



const architectsDaughter = Architects_Daughter({

  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-architectsDaughter",

});

const bowlbySC = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bowlbySC",

});

const raleway = Raleway({
subsets: ["latin"],
weight: ["400"],
variable: "--font-raleway",

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    

    <html lang="de" className={` ${bowlbySC.variable} ${raleway.variable} ${architectsDaughter.variable}`}>
      <body className={` antialiased`}>
       
          {children}
          
          
           </body>

    
    </html>
    
   
  );
}
