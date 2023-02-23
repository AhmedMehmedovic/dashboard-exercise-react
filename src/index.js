import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";

import "./index.css";

const LicenseKey =
  "Mgo+DSMBaFt/QHRqVVhlXVpHaV1HQmFJfFBmTGlYe1RydkU3HVdTRHRcQl9hSn5adENnX31ecnI=;Mgo+DSMBPh8sVXJ0S0J+XE9Bd1RBQmFMYVF2R2BJdlRxcF9EYkwgOX1dQl9gSXxRdUVqW3ladnZdQ2E=;ORg4AjUWIQA/Gnt2VVhkQlFac15JXnxLe0x0RWFab1d6dVFMYl5BNQtUQF1hSn5RdEZjUH1YdHJWRWld;MTE4OTg3M0AzMjMwMmUzNDJlMzBtMTRkOC94NW9HaUI4YUt4b0l0NXF3UjVINWg1V25tQm5vTCsrOHhMUHBRPQ==;MTE4OTg3NEAzMjMwMmUzNDJlMzBQeWpXN3prZEd5M25xOGdkSThhYS93TVFCbnpzdjF1MkZwODBDZ2lJL1hzPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpDVmBWfFZpR2NbfE55flRCal5TVAciSV9jS31TdEdgWXZcdnBTQWNYVQ==;MTE4OTg3NkAzMjMwMmUzNDJlMzBiM0RJSURoRW5WdU95dUk3M2FWaVlnOGRtQnZOelRoTWhBNkU4Nk1hRkc4PQ==;MTE4OTg3N0AzMjMwMmUzNDJlMzBGQjV4Y2xwaDM4bGRmYUlab3VycW05QTMya1JTUTBjc2lSa1BXQ2ljaCtjPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac15JXnxLe0x0RWFab1d6dVFMYl5BNQtUQF1hSn5RdEZjUH1YdHJdQWlc;MTE4OTg3OUAzMjMwMmUzNDJlMzBuRHk0Q1BPbGVQS3V3Y2p0VE1qakNGUUk3dzVMMlRNVDl3eFlDSzFsSm84PQ==;MTE4OTg4MEAzMjMwMmUzNDJlMzBEUXJIeitJdXg5cDRmRTlVRmw4Q21sdndOa3NmcWd4Z1hmVExBSU4yb1E0PQ==;MTE4OTg4MUAzMjMwMmUzNDJlMzBiM0RJSURoRW5WdU95dUk3M2FWaVlnOGRtQnZOelRoTWhBNkU4Nk1hRkc4PQ";
registerLicense(LicenseKey);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
