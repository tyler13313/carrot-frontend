import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Name = {
  FirstName?: string;
  MiddelName?: string;
  Time?: string;
  Price?: string;
};

const TradeInformation = (props: Name) => {
  const { FirstName, MiddelName, Time, Price } = props;
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        {FirstName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {MiddelName}
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        {Price}
      </Typography>
    </>
  );
};

export default TradeInformation;
