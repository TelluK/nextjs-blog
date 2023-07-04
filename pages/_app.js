import '../styles/globals.css';

// top-level component to wrap all pages in application
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}