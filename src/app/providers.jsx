import { Provider } from "react-redux";
import { store } from "./store";
import ThemeProvider from "../context/ThemeProvider";

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
        </Provider>
    );
};

export default Providers;
