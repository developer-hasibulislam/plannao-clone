import store from "@/app/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Root from "./root";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Provider>
  );
}
