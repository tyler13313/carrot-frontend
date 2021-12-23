import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Toolbar,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";

const Chat = (): JSX.Element => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Avatar
                src="https://t1.daumcdn.net/cfile/tistory/231614475363D74809"
                variant="rounded"
                sx={{ width: 80, height: 80 }}
              />
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">사가세요...</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">16000원</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" color="secondary">
                거래 후기 남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Grid item xs={9}>
          <TextField />
        </Grid>
        <Grid item xs={2}>
          <IconButton />
        </Grid>
      </AppBar>
    </>
  );
};

export default Chat;
