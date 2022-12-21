import React from "react";
import ReactDOM from "react-dom";

import AppWrapper from "./AppWrapper";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { EventContextProvider } from "./contexts/EventContext";
import { ResultContextProvider } from "./contexts/ResultContext";

ReactDOM.render(
  <AppWrapper>
    <AuthContextProvider>
      <EventContextProvider>
        <ResultContextProvider>
          <App />
        </ResultContextProvider>
      </EventContextProvider>
    </AuthContextProvider>
  </AppWrapper>,
  document.getElementById("root")
);
