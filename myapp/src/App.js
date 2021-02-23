import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Lottie from "react-lottie";
import animationData from "./lottie/35799-3-animation.json";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
  },
  cardstyle: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0 3px 20px 0 rgba(0,0,0,.12)",
    borderRadius: 15,
    height: 590,
  },
}));

function App() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Navbar />
      <Grid container className={classes.root}>
        <Grid item lg={6} xs={12} sm={6}>
          <Lottie options={defaultOptions} height={700} width={700} />
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" style={{}}>
            Hi, I am Phongkhanet
          </Typography>
          <div style={{ float: "left" }}>
            <Typography style={{ fontSize: "18px" }}>
              Ubon Ratchathani University, Computer Science
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
