import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import NewsCard from './news_card';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
import AutoResponsive from 'autoresponsive-react';
import Container from '@material-ui/core/Container';

class NewsGridList extends React.Component {

    constructor(props) {
        super(props)
        this.gridContainer = React.createRef();
    }

    state = {
        data: [],
        loadMore: false,
        page: 0,
        containerWidth: 0
    }

    gridSpacing = 2

    /*   componentDidUpdate(prevProps, prevState, snapshot) {
          if ((prevState.page != this.state.page) || (prevState.loadMore != this.state.loadMore))
              this.refreshData(this.state.loadMore)
      } */

    componentDidMount() {
        window.addEventListener('resize', () => {
            console.log("resize containerWidth = "+ this.gridContainer.current.clientWidth);
            this.setState({
                data: this.state.data,
                loadMore: this.state.loadMore,
                page: this.state.page,
                containerWidth: this.gridContainer.current.clientWidth
            });
        }, false);

        this.fetchData()
        /*        const list = this.gridContainer.current
               console.log("list is : " + list)
               if (this.props.scrollable) {
                   // list has fixed height
                   console.log('adding event to grid (scrollable)')
                   list.addEventListener('scroll', (e) => {
                       const el = e.target;
                       if (el.scrollTop + el.clientHeight === el.scrollHeight) {
                           console.log("request load more (scrollable)")
                           this.state.page++;
                           this.refreshData(true)
                       }
                   })
               } else {
                   // list has auto height 
                   console.log('adding event to grid (auto height)')
                   window.addEventListener('scroll', () => {
                       const v1 = list.scrollTop + list.clientHeight;
                       const v2 = list.scrollHeight;
                       console.log("on event scroll grid (auto height): " + v1 + " vs " + v2)
                       if (v1 === v2) {
                           console.log("request load more (auto height)")
                           this.state.page++;
                           this.refreshData()
                       }
                   })
               }
       
               this.refreshData(false) */
    }

    fetchData = () => {
        console.log("fetching data")
        let url = `http://localhost:4000/api/news?per_page=40`
        const _loadMore = true;
        let _page = this.state.page;
        if (_loadMore) {
            _page = _page + 1;
            url += '&page=' + _page;
        }
        axios.get(url)
            .then(res => {
                const news = res.data;
                console.log(news)
                if (_loadMore)
                    this.setState(
                        {
                            data: [...this.state.data, ...news],
                            loadMore: true,
                            page: this.state.page
                        })
                else this.setState(
                    {
                        data: news,
                        loadMore: true,
                        page: this.state.page
                    })
                console.log(this.state.data)
            })
    }

    renderType1() {
        return (
            <Container>
                <InfiniteScroll
                    dataLength={this.state.data.length}
                    next={this.fetchData}
                    hasMore={true}
                    loader={<h4>Đang tải thêm...</h4>}>
                    <Grid ref={this.gridContainer} container spacing={this.state.spacing}>
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
                </InfiniteScroll>
            </Container>

        );
    }

    getAutoResponsiveProps() {
        console.log("on get auto responsive props: stateContainerWidth = "+ this.state.containerWidth+", dbcW = "+ document.body.clientWidth);
        return {
            itemMargin: 3,
            containerWidth: this.state.containerWidth || document.body.clientWidth,
            itemClassName: 'item',
            transitionDuration: '.5',
            horizontalDirection: 'center-align'
        };
    }

    renderType3() {
        let style = {
            width: 190,
            height: 240
        };
        return (
            <InfiniteScroll
            dataLength={this.state.data.length}
            next={this.fetchData}
            hasMore={true}
            >
                    <Container>
                <AutoResponsive ref={this.gridContainer} {...this.getAutoResponsiveProps()}>
                    {
                        this.state.data.map((e) => (
                            <div className='album item' style={{width: 300, height: 140 + 50 + 40 * e.title.length/21 + e.summary.length/39 *35}}>
                            <NewsCard  data={e} key={e._id}  />
                            </div>
                        ))}
                </AutoResponsive>
                </Container>
            </InfiniteScroll>

        );
    }

    render() {
        return this.renderType3()
    }
}

export default NewsGridList