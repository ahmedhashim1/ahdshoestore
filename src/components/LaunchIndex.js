import React from "react";
import shoes from "../shoes.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 200,
  },
  card: {
    margin: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

var cardStyle = {
  display: "block",
  width: "24vw",
  transitionDuration: "0.2s",
  height: "30vw",
};

function LaunchIndex() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Grid item xs={12} sm={6} md={3} key={slug}>
            <Link to={`/launch/${slug}`}>
              <Card className={classes.root} style={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title={slug}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {slug}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LaunchIndex;
