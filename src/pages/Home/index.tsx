import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Avatar } from "@mui/material";
import { ListItemAvatar, ListItemText } from "@mui/material";
import { tradeItems } from "./data";
import TradeInformation from "./components/TradeInformation";
const ImageTheme = {
  width: "150px",
  height: "150px",
};

const Home = (): JSX.Element => {
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.imageUrl}
                    sx={ImageTheme}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={<TradeInformation FirstName="ㅁㅇㄹ" />}
                  secondary={item.location}
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
