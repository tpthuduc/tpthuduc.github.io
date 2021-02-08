import * as React from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { apiGet } from "util/ApiUtil";
import { NewsTopic } from "components/NewsTopic";
import { TagCloud } from 'react-tagcloud'
import { Card } from "tabler-react";

const options2 = {
    luminosity: 'dark',
    // hue: '#467fcf',
}

const customRenderer = (tag, size, color) => {
    const fontSize = size + 'px'
    const key = tag.key || tag.value
    const style = { ...styles, color, fontSize }
    return (
        <span className="tag-cloud-tag" style={style} key={key}>
            {tag.value}
        </span>
    )
}

const styles = {
    margin: '0px 3px',
    verticalAlign: 'middle',
    display: 'inline-block',
    cursor: "pointer",
}

class TrendsRating extends React.Component {

    getTrendsText(item, index) {
        if (item.status < 0) {
            return (index <= 4 || this.props.collapsed) ? item.text + " ▼" : item.text + " 🡣";
        } else if (item.status >= 0) {
            return (index <= 4 || this.props.collapsed) ? item.text + " ▲" : item.text + " 🡡";
        } else return item.text + " ✦";
    }

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            isSuccess: true,
            list: [],
            total: 0,
            title: "Xu Hướng"
        }
    }

    componentDidMount() {
        this.reload();
    }

    async reload() {
        this.setState({ ...this.state, isFetching: true });

        const trends = await apiGet("/trends/rating");
        if (trends && trends.isSuccess && trends.data) {
            const listOrigin = ((trends.data.data) || []).map((item, index) => {
                return { key: item.text, value: this.getTrendsText(item, index), count: item.count }
            });
            const list = (this.props.collapsed) && listOrigin.length > 15 ? listOrigin.slice(0, 15) : listOrigin;
            this.setState(
                {
                    ...this.state,
                    isFetching: false,
                    isSuccess: true,
                    list: list,
                    total: trends.data.total
                });
        } else {
            this.setState({ ...this.state, isFetching: false, isSuccess: false });
        }

    }

    onClickTag(tag) {
        if (tag && tag.key) {
            this.props.history.push('/stories/' + tag.key);
        }
    }

    render() {
        if (this.state.isFetching || !this.state.isSuccess) {
            return <NewsTopic title={this.state.title} isFetching={this.state.isFetching} isSuccess={this.state.isSuccess} list={this.state.data && this.state.data.data || []} onReload={this.reload} />
        } else {
            return (<TagCloud
                minSize={12}
                maxSize={40}
                colorOptions={options2}
                tags={this.state.list}
                onClick={(tag) => this.onClickTag(tag)}
                renderer={customRenderer} />
            )
        }
    }
}

function mapStateToProps({ authReducer }) {
    return {
        authReducer
    }
}

export const TrendsRatingContainer = connect(
    mapStateToProps
)(TrendsRating);