import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import {wrapper} from "../app/store";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <Component {...pageProps} />
        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
