import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Avatar } from "@mui/material";
import { ListItemAvatar, ListItemText } from "@mui/material";
import { tradeItems } from "./data";
import TradeInformation from "./components/TradeInformation";
import TradeEvent from "./components/TradeEvent";
import { useEffect, useState } from "react";
import axios from "axios";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

type TradeItem = {
  id: string;
  image: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

const Home = (): JSX.Element => {
  const [tradeItems, setTradeItems] = useState<TradeItem[]>([]);
  const readArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles");
    setTradeItems(data);
  };
  useEffect(() => {
    readArticles();
  }, []);
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.image} sx={ImageTheme} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <TradeInformation
                        title={item.title}
                        location={item.location}
                        createdAt={item.createdAt}
                        price={item.price}
                      />
                    </>
                  }
                  secondary={
                    <TradeEvent chat={item.chat} interest={item.interest} />
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
