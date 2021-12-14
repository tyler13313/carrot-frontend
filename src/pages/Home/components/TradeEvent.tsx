import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Box from "@mui/material/Box";

type TradeEventType = {
  chat?: number;
  interest?: number;
};

const TradeEvent = (event: TradeEventType): JSX.Element => {
  const { chat, interest } = event;

  return (
    <Box display="flex" alignItems="center " justifyContent="right">
      {chat && (
        <>
          <ChatBubbleOutlineIcon />
          {chat}
        </>
      )}
      {interest && (
        <>
          <FavoriteBorderIcon />
          {interest}
        </>
      )}
    </Box>
  );
};

export default TradeEvent;
