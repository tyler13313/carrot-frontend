import { Toolbar, AppBar, Grid, Box } from "@mui/material";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />

      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs style={{ backgroundColor: "#ff2fff" }}>
              <Box display="flex" justifyContent="center">
                홈
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff2fff" }}>
              <Box display="flex" justifyContent="center">
                동네생활
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff2fff" }}>
              <Box display="flex" justifyContent="center">
                내 근처
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff2fff" }}>
              <Box display="flex" justifyContent="center">
                채팅
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ff2fff" }}>
              <Box display="flex" justifyContent="center">
                나의 당근
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default App;
