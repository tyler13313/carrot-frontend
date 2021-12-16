import { Toolbar, AppBar, Grid, Box } from "@mui/material";
import BottomAppBar from "./components/BottomAppBar";
import Home from "./pages/Home";
import TradeInformation from "./pages/Home/components/TradeInformation";
import TradeDetail from "./pages/TradeDetail";
const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />
      <TradeDetail />
      <Toolbar />
      {/* <BottomAppBar /> */}
    </main>
  );
};

export default App;
