import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isGsapBasicRoute = router.pathname.startsWith('/gsap-basic');
    
    if (isGsapBasicRoute) {
      // Add gsap-basic styles to the document
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/styles/gsap-basic.css';
      link.id = 'gsap-basic-styles';
      
      // Remove existing gsap-basic styles if any
      const existingLink = document.getElementById('gsap-basic-styles');
      if (existingLink) {
        existingLink.remove();
      }
      
      document.head.appendChild(link);
    } else {
      // Remove gsap-basic styles when not on gsap-basic routes
      const existingLink = document.getElementById('gsap-basic-styles');
      if (existingLink) {
        existingLink.remove();
      }
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
