import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";
import { Layout } from "src/components";
import { DataProvider } from "src/DataProvider/DataProvider";
import { routes } from "src/global";

function App() {
  return (
    <DataProvider>
      <Layout>
        <CssBaseline />
        <Routes>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </Layout>
    </DataProvider>
  );
}

export default App;
