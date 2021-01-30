import * as React from "react";
import { render } from "react-dom";
class EmptyPageContent extends React.Component {
    render() {
        return (<div className="erb text-blue">
            <div className="wrapper">
                <h1>Hmm</h1>
                <p>Máy chủ hiện không phản hồi, vui lòng thử lại lần nữa. </p>
                <div className="buttons">
                    <a href="" onClick={this.props.onButtonClick}>Thử lại</a>
                </div>
            </div>
        </div>)
    }
}

export default EmptyPageContent;