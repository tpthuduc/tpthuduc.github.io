import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import NewsCard from './news_card'
import axios from 'axios';
import Container from '@material-ui/core/Container';
import BaseNewsGrid from './base_news_grid'

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
  }));

class NewsGridList extends BaseNewsGrid {

    state = {
        data: []
    }

    gridSpacing = 2

    componentDidMount() {
        axios.get(`http://localhost:4000/api/news`)
            .then(res => {
                const news = res.data;
                this.setState(
                    {
                        data: news,
                    })
            })
    }

    render() {
        console.log(this.state.news)
        return (
            <Container>
            <Grid container className={this.props.root} spacing={this.state.spacing}>
                <Grid item xs={12}>
                    <Grid container spacing={this.gridSpacing} justify="center" >
                        {this.state.data.map((e) => (
                            <Grid key={e._id} item>
                                <NewsCard data={e} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            </Container>

        );
    }
}

export default withStyles(styles, { withTheme: true })(NewsGridList)