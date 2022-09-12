import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import { textAlign } from "@mui/system";
import hand from "/src/hand.png";

// const icon = {
//   width: "50px",
//   height: "50px",
//   color: "red",
//   marginTop: "15px"
// };
const text = {
  color: "white",
  textAlign: "left"
};
const sani = {
  maxWidth: 999,
  maxHeight: 990,
  backgroundColor: "#4339f2"
};
const butt = {
  variant: "outlined",
  // position: 'fixed',
  bgcolor: "white",
  color: "black",
  height: "25px",
  marginTop: "-10px",
  marginRight: "20px"
};
const Banner2 = () => {
  return (
    <div>
      <Card sx={sani}>
        <div style={{ float: "left" }}>
          <img
            style={{ width: 100, height: 130 }}
            src={hand}
            alt="cardbanner"
          />
        </div>
        <div style={{ float: "center" }}>
          <center>
            <Typography variant="h5" gutterBottom sx={text}>
              <b>Creative outdoor adds</b>
            </Typography>
          </center>
          <center>
            <Typography variant="body1" gutterBottom sx={text}>
              <b>Every large design company whether its multinational.</b>
              <p>Branding corporation or a regular down at heel tatty. </p>
              Magzine publisher needs to fill holes in workforce.
            </Typography>
          </center>
        </div>
        <div style={{ float: "right" }}>
          <Button sx={butt}>see more</Button>
        </div>
      </Card>
    </div>
  );
};
export default Banner2;
