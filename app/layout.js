import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Blogify",
  description: "Blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mainfont scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
