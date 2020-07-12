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

import Slide from '@material-ui/core/Slide';

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

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Card className={classes.root} onClick={handleClickOpen('body')}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://img.vtcnew.com.vn/resize/th/upload/2020/07/12/doan-van-hau-11172715.jpg"
            title={props.data.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.Title ? props.data.Title : "Bài viết không có tiêu đề"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.Summary ? props.data.Summary : "Nhấn để xem chi tiết"}
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
        <DialogTitle id="scroll-dialog-title">{props.data.Title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Container>
              <ModalBody content={props.data.Content} />
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          <Button onClick={handleClose} color="primary">
            Xem bài gốc
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
