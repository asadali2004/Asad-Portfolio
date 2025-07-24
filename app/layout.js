import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import LoadingState from "./components/LoadingState";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Asad Ali - Full-Stack Developer",
  description:
    "This is the portfolio of Asad Ali. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Prevent layout shift */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 min-h-screen will-change-auto`}>
        {/* Optimized background overlays with reduced opacity for mobile */}
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/8 to-blue-600/5 pointer-events-none will-change-auto md:from-emerald-500/10 md:via-cyan-500/15 md:to-blue-600/10"></div>
        <div className="fixed inset-0 bg-gradient-to-tr from-orange-500/4 via-transparent to-pink-500/4 pointer-events-none will-change-auto md:from-orange-500/8 md:to-pink-500/8"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/4 via-transparent to-transparent pointer-events-none will-change-auto md:from-cyan-400/8"></div>
        
        <ToastContainer 
          position="bottom-center"
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
        <main className="min-h-screen relative w-full text-white z-10">
          <LoadingState>
            <div className="w-full relative z-10">
              {children}
              <ScrollToTop />
            </div>
          </LoadingState>
        </main>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
