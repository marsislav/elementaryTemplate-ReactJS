import React from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  siteTitle: { fontWeight: "bold", lineHeight: 1.5, color: "#338E83" },
  menuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));
export default function NavigationBar() {
  const classes = useStyles();
  return (
    <Container>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.siteTitle}>SrS - marsislav</Typography>
        <Box className={classes.menuBox}>
          {["Home", "About", "Contact Us"].map((menuOption) => (
            <Link
              component="button"
              variant="body1"
              className={classes.menuOption}
            >
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
