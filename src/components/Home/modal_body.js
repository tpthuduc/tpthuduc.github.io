import React from 'react';

export default class ModalBody extends React.Component{
    rawMarkup(){
        var rawMarkup = this.props.content
        return { __html: rawMarkup };
    }
    render(){
        return(
                <div className="modal-body">
                     <span dangerouslySetInnerHTML={this.rawMarkup()} />

                </div>
            )
    }
}