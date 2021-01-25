import * as React from "react";
import { connect } from "react-redux";

import { NewsTopic } from "components/NewsTopic";
import { TitleSharp } from "@material-ui/icons";
import { apiGet } from "util/ApiUtil";


class StoryPage extends React.Component {
  constructor(props) {
    super(props);
    const search = this.props.location.search;
    const { match } = this.props;
    //const params = new URLSearchParams(search);
    //this.id = (params.get('id') || "").toString();
    const id = match && match.params.id || "0";
    this.state = {
      id,
      isFetching: false,
      isSuccess: true,
      data: {},
      title: "Story"
    }
  }

  componentDidMount() {
    this.reload();
  }

  async reload() {
    this.setState({ ...this.state, isFetching: true });

    const story = this.state.id && this.state.id != "0" && await apiGet("/news/similarity/" + this.state.id);
    if (story && story.isSuccess && story.data) {
      this.setState({ ...this.state, isFetching: false, isSuccess: true, data: story.data });
    } else {
      this.setState({ ...this.state, isFetching: false, isSuccess: false, data: {} });
    }

  }

  render() {
    return <NewsTopic title={this.state.title} isFetching={this.state.isFetching} isSuccess={this.state.isSuccess} list={this.state.data && this.state.data.data || []} onRetry={this.reload} />
  }
}

function mapStateToProps({ authReducer }) {
  return {
    authReducer
  }
}

export const StoryContainer = connect(
  mapStateToProps
)(StoryPage);