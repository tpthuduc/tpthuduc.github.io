import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsCard from './news_card'
import axios from 'axios';

class NewsGridList extends React.Component {

    constructor(props) {
        super(props);
      }

    state = {
        news: [],
        spacing :2
    }

    styles = withStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: 10
        }
    }));

    componentDidMount() {
        axios.get(`http://localhost:4000/api/post`)
            .then(res => {
                const news = res.data;
                this.setState({ news });
            })
    }

    render() {

        return (
            <Grid container className={this.styles.root} spacing={this.state.spacing}>
                <Grid item xs={12}>
                    <Grid container spacing={this.state.spacing} justify="center" >
                        {this.state.news.map((e) => (
                            <Grid key={e._id} item>
                                <NewsCard data={e} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default NewsGridList;