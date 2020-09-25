import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ModalBody from './modal_body'
import CircularIndeterminate from '../base/progress_bar'

import Slide from '@material-ui/core/Slide';

import NewsApi from '../../api/News.js'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    maxWidth: 305,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [contentAvailable, setContentAvailable] = React.useState(false)
  const [data, setData] = React.useState(props.data)

  const api = new NewsApi()

  const handleClickOpen = (scrollType, props) => () => {
    setOpen(true);
    setScroll(scrollType);
    loadFeedDetail(props)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare =() => {
    window.location.href = data.source
  }

  const loadFeedDetail = (props) => {
    console.log("loading feed detail: content = "+ data.content);
    if(!data.content) {
    api.loadFeedDetail(data.id).then(res => {
      console.log("detail :");
      console.log(res);
      setData(res);
      setContentAvailable(true);
    })
  } else {
    setContentAvailable(true);
  }
  
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Card className={classes.root} onClick={handleClickOpen('body', props)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.thumbnail}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title ? data.title : "Bài viết không có tiêu đề"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.summary ? data.summary : "Nhấn để xem chi tiết"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Đọc
        </Button>

        </CardActions>
      </Card>
      <Dialog
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{data.title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Container>
              {(!contentAvailable) ? <CircularIndeterminate/> : <ModalBody content={data.content} />}
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          <Button onClick={handleShare} color="primary">
            Xem bài gốc
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
