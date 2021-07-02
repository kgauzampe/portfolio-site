import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Skills() {
  return (
    <>
      <Navbar />

      <div className="skills">
        <Typography component="h1" variant="h2">
          Skills
        </Typography>
        <Container>
          <center>
          <Grid container spacing={1} justify="center" align="center">
            <Grid item xs={12} md={6} lg={6}>
              <List component="nav" aria-label="skills">
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="NextJs" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="ReactJs" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="JavaScript" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="NodeJs" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="PHP" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Wordpress" />
                </ListItem>
                
              </List>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              <List component="nav" aria-label="skills">
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Jest" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="DynamoDB" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Docker" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="HTML5" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="CSS3" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Jasmine" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          </center>
        </Container>
      </div>
      <Footer />
    </>
  );
}
