import { ToastContainer } from "react-toastify";
import { ContextProviders } from "./Providers/UserContext";
import { MainRoutes as Routes } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <ContextProviders>
        <Routes />
      </ContextProviders>
    </>
  );
};
