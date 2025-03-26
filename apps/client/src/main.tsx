import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import { Providers } from "./providers";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router } />
    </Providers>
  </StrictMode>
);
