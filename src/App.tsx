import { ReactElement } from "react";
import { Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppRouter from "./routes/AppRouter";
import { getCustomLocale } from "./utils/getCustomLocale";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const updatedPtBr = getCustomLocale();

const App = (): ReactElement => {
  return (
    <ConfigProvider locale={updatedPtBr}>
      <Router history={customHistory}>
        <AppRouter />
      </Router>
    </ConfigProvider>
  );
};

export default App;
