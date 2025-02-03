import Header from "@/app/style/header";
import Footer from "@/app/style/Footer";
import style from "@/app/style/style.module.css";

export const metadata = {
  title: 'Letterbox',
  description: 'Movie website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={style.body}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
