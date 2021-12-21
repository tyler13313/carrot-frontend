import { Avatar, Box, Grid, LinearProgress, Typography } from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import TradeAppBar from "./components/TradeAppBar";

const TradeDetail = (): JSX.Element => {
  return (
    <Box paddingTop="20px">
      <Grid container>
        <Grid item xs={1}>
          <Avatar
            src="https://photo.coolenjoy.net/data/editor/2102/0021a45da9ed8676494e1a817515c4459f996f9d.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">아이디</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">지역</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" color="Primary">
                36.6°C
              </Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={4}>
              <SentimentSatisfiedIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h4">안녕하세요 수현이를 팝니다</Typography>
      <Box>
        물건 팝니다 <br /> 아주 맛있습니다. 싸게 팝니다
      </Box>
      <TradeAppBar isInterest={true} price={50000} isAdjustable={true} />
    </Box>
  );
};

export default TradeDetail;
