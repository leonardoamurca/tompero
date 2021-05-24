import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 25,
    height: 333,
    width: 333,
  },
  media: {
    height: 140,
  },
});

const RecipeCard = ({ recipe }) => {
  const classes = useStyles();

  return (
    <NavLink style={{ textDecoration: "none" }} to={`/recipe/${recipe.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipe.picture}
            title={recipe.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipe.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};

export default RecipeCard;
