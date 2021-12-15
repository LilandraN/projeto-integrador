import { ReactElement } from "react";
import { Router } from "react-router-dom";

// import { auth } from '@hercules/root-app-api';
import { ConfigProvider } from "antd";
import AppRouter from "./routes/AppRouter";
import { getCustomLocale } from "./utils/getCustomLocale";
import { createBrowserHistory } from "history";

// import useConfig from './hooks/useConfig';
// import useHotjar from './hooks/useHotjar';
// import './styles/global.less';
// import AppRouter from "./routes/AppRouter";
// import { History } from "./routes/history";
// import { AuthProvider } from "./hooks/useAuth";

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
