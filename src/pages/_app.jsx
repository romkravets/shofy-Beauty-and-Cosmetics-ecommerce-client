import store from "@/redux/store";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import '../styles/index.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <div id="root">
            <Component {...pageProps} />
          </div>
      </Provider>
  )
}
