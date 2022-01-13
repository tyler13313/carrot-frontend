import { Avatar, Box, Grid, LinearProgress, Typography } from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import TradeAppBar from "./components/TradeAppBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Title, TramRounded } from "@mui/icons-material";

type TradeItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  chat?: number;
  isAdjustable: boolean;
};

const TradeDetail = (): JSX.Element => {
  const [article, setArticle] = useState<TradeItem>();
  const getArticle = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles/3");
    setArticle(data);
  };
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <Box paddingTop="20px">
      <Grid container>
        <Grid item xs={1}>
          <Avatar
            src={article && article.image}
            sx={{ width: 80, height: 80 }}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">아이디</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                <>{article && article.location}</>
              </Typography>
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
      <Typography variant="h4">{article && article.title}</Typography>
      <Box>{article && article.description}</Box>
      {article && (
        <TradeAppBar
          isInterest={true}
          price={article.price}
          isAdjustable={article.isAdjustable}
        />
      )}
    </Box>
  );
};

export default TradeDetail;
