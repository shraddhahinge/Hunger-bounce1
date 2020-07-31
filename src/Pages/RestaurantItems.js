import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./RestaurantItems.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function RestaurantItems({ image, key, data }) {
  const classes = useStyles();
  let img = data.featured_image;

  return (
    <Card className={`card ${classes.root}`}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img === "" ? image : img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.cuisines}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Average for two: {data.currency} . {data.average_cost_for_two}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {data.user_rating.aggregate_rating}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Direction: {data.location.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RestaurantItems;
