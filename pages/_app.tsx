import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import getStore from "store";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
