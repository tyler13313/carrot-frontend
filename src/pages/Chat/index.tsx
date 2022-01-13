import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Message } from "@mui/icons-material";
import moment from "moment";
import { messages } from "./data";

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
      <Toolbar />
      <br />
      <Box>
        <Grid container>
          {messages.map((message): JSX.Element => {
            const myId = "me";
            return (
              <Grid item xs={12} key={message.id}>
                {message.sender !== myId && (
                  <Box display="flex" justifyContent="left" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}
                {message.sender === myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={11}>
              <TextField fullWidth size="small" />
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" justifyContent="center">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Chat;
