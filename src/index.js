import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SpinnerLoader from "./components/Spinner";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<SpinnerLoader />}>
          <Routes />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
