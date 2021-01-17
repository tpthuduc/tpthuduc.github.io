import React from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";

class OverviewPage extends React.PureComponent {
    render() {
        const match = this.props.match;
        return <div>
            <div>
                <h1>Overview</h1>
                <hr />

                <Route exact path={`${this.props.match.url}/analytics`} component={AnalyticsPage} />
                <Route exact path={`${this.props.match.url}/`} component={HomePage} />
            </div>
        </div>
    }
}

function mapStateToProps({ authReducer }) {
    return { authReducer }
}


class HomePage extends React.PureComponent {
    render() {
        return <div>
            <h2>Home</h2>


        </div>
    }
}

class AnalyticsPage extends React.PureComponent {
    render() {
        return <div>
            <div>
                <h2>AnalyticsPage</h2>
            </div>
        </div>
    }
}

export const OverviewContainer = connect(mapStateToProps)(OverviewPage);
