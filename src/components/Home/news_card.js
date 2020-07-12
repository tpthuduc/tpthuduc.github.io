import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={props.data.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.Title ? props.data.Title : "Bài viết không có tiêu đề"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          { props.data.Summary ? props.data.Summary : "Nhấn để xem chi tiết"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Đọc
        </Button>
        <Button size="small" color="primary">
          Chia sẻ
        </Button>
      </CardActions>
    </Card>
  );
}
