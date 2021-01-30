import * as React from "react";
import { connect } from "react-redux";

import { NewsTopic } from "components/NewsTopic";
import { apiGet } from "util/ApiUtil";

class TagPage extends React.Component {
  constructor(props) {
    super(props);
    const search = this.props.location.search;
    const { match } = this.props;
    //const params = new URLSearchParams(search);
    //this.id = (params.get('id') || "").toString();
    const query = match && match.params.id || "0";
    this.state = {
      query,
      isFetching: false,
      isSuccess: true,
      list: [],
      page: 1,
      title: query,
      hasMore: true,
    }
  }

  componentDidMount() {
    this.reload();
  }

  async reload(page = 1, loadMore = false) {
    this.setState({ ...this.state, isFetching: true });

    if (page < 1) {
      page = 1;
    }

    const response = this.state.query && this.state.query != "0" && await apiGet("/news/feed?query=" + this.state.query + "&page=" + page);
    if (response && response.isSuccess && response.data) {
      this.setState({ ...this.state, isFetching: false, isSuccess: true, data: response.data });
    } else {
      this.setState({ ...this.state, isFetching: false, isSuccess: false, data: {} });
    }

    if (response && response.isSuccess && response.data) {
      const list = (!loadMore) ? (response.data || []) : [...(this.state.list || []), ...(response.data || [])];
      const hasMore = response.data && Array.isArray(response.data) && response.data.length > 0;
      this.setState({ ...this.state, isFetching: false, isSuccess: true, list: list, hasMore: hasMore, page: page });
    } else {
      this.setState({ ...this.state, isFetching: false, isSuccess: false, hasMore: true });
    }

  }

  loadMore() {
    this.reload((this.state.page || 0) + 1, true);
  }

  render() {
    return <NewsTopic title={this.state.title} isFetching={this.state.isFetching} isSuccess={this.state.isSuccess} list={this.state.list || []} onReload={() => this.reload()} onLoadMore={() => this.loadMore()} hasMore={this.state.hasMore} />
  }
}

function mapStateToProps({ authReducer }) {
  return {
    authReducer
  }
}

export const TagPageContainer = connect(
  mapStateToProps
)(TagPage);