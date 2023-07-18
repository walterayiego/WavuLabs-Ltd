import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/swiperjs.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
