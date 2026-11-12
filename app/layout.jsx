import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "IEP & Special Education Advocate | Raegan Holladay Advocacy",
  description:
    "Helping parents navigate special education with practical guidance from a Harvard-trained attorney, experienced advocate, and fellow parent.",
  metadataBase: new URL("https://raeganking.com"),
  openGraph: {
    siteName: "Raegan Holladay Advocacy",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
