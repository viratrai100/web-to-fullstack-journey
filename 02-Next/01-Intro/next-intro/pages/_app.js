import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <h1>Welcome to Next.js Intro</h1>
      <Component {...pageProps} />
      <footer>Virat</footer>
    </div>
  );
}
