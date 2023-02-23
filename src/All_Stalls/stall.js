import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'center'
  }
};

const stall = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../assets/img/mapchatImg.png")}
          title="Notes Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          stall
          </Typography>
          <Typography component="h2">
          Southsea
          </Typography>
          <Typography component="p">
            We buy and sell antique
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://location' target='blank'>
          Link to place
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

stall.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(stall);