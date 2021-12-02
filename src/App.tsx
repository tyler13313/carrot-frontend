import { Toolbar, AppBar, Grid, Box } from "@mui/material";
import BottomAppBar from "./components/BottomAppBar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />

      <BottomAppBar />
    </main>
  );
};

export default App;
