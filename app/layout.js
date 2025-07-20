import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Asad Ali - Full-Stack Developer",
  description:
    "This is the portfolio of Asad Ali. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: "/favicon.ico?v=2",  // <-- Added here!
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 min-h-screen`}>
        {/* Modern 2025 background overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/15 to-blue-600/10 pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-to-tr from-orange-500/8 via-transparent to-pink-500/8 pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/8 via-transparent to-transparent pointer-events-none"></div>
        
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ zIndex: 99999 }}
          toastStyle={{ zIndex: 99999 }}
        />
        <Navbar />
        <main className="min-h-screen relative w-full text-white pt-20 z-10">
          <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] relative z-10">
            {children}
            <ScrollToTop />
          </div>
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
