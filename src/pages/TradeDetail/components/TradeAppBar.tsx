import { Box, Grid, AppBar, Typography, Button, Toolbar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
type TradeType = {
  isInterest: boolean;
  price: number;
  isAdjustable: boolean;
};

const TradeAppBar = (props: TradeType): JSX.Element => {
  const { isInterest, price, isAdjustable } = props;

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
    >
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {isInterest ? (
              <FavoriteIcon color="secondary" fontSize="large" />
            ) : (
              <FavoriteBorderIcon color="primary" fontSize="large" />
            )}
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" color="#2b2b2b">
                  <strong>{price}원</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="#2b2b2b">
                  <strong>
                    {isAdjustable ? "가격 제안 가능" : "가격 제안 불가능"}
                  </strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sx={{ display: "felx", alignItems: "center" }}>
            <Button variant="contained" color="secondary" fullWidth>
              채팅으로 거래하기
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TradeAppBar;
