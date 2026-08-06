import ReactDOM from "react-dom/client";
import "./styles/globals.css";

import Providers from "./app/providers";
import AppRoute from "./routes/AppRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Providers>
        <AppRoute />
    </Providers>,
);
