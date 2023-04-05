import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ScrollToTop from "./Scroll/scrollToTop";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux-persists:
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer position="top-right" autoClose={3000} />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
