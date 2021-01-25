import * as React from "react";
import { render } from "react-dom";
class EmptyPageContent extends React.Component {
    render() {
        const isFetching = this.props.isFetching || false;
        const isSuccess = this.props.isSuccess || false;
        const title = this.props.title || "Hmm";
        const description = this.props.description || "Máy chủ hiện không phản hồi, vui lòng thử lại lần nữa.";
        const buttonText = this.props.buttonText || "Thử lại";

        if (isFetching) {
            return (<div className="p-empty-body col-12 d-flex justify-content-center">
                <div className="loader card" style={{
                    backgroundColor: "transparent",
                    backgroundClip: "unset",
                    border: "0",
                    borderRadius: "0",
                    boxShadow: "none"
                }} />
            </div>)
        } else if (!isSuccess) {
            return (<div className="erb text-blue">
                <div className="wrapper">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="buttons">
                        <a href="" onClick={this.props.onButtonClick}>{buttonText}</a>
                    </div>
                </div>
            </div>)
        } else {
            return <div />
        }
    }
}

export default EmptyPageContent;