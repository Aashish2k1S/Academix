import { createRoot } from "react-dom/client";
import "./index.css";
// import { Provider } from "react-redux";
// import store from "./app/store.ts";
import AppRoutes from "./routes/AppRoute.tsx";

createRoot(document.getElementById("root")!).render(
        <AppRoutes />
);
