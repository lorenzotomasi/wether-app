import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { initIcons } from "./services/icon";
import { Provider } from "react-redux";
import { configuredStore, persistedStore } from "./services/store";
import MainWetherPageView from "./UI/views/MainWetherPageView";
import { PersistGate } from "redux-persist/lib/integration/react";
import ErrorBoundary from "./UI/widgets/ErrorBoundary/ErrorBoudnary";

initIcons();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={configuredStore}>
      <PersistGate persistor={persistedStore}>
        <ErrorBoundary>
          <MainWetherPageView />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
