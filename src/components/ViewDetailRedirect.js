import * as React from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";
export default class ViewDetailRedirect extends React.Component {
    state = {
        url: null,
    };

    componentWillMount() {
        const { id } = this.props.params.id;
        axios.post("server", { id }).then(
            result => {
                this._asyncRequest = null;
                this.setState({ url: result.url });
            }
        ).catch((err)=>{})
    }

    // componentWillUnmount() {
    //     if (this._asyncRequest) {
    //         this._asyncRequest.cancel();
    //     }
    // }

    render() {
        const url = this.url;
        const redirectUrl ="link"
        return <Redirect url={url||redirectUrl}></Redirect>
    }
    

    // async render() {
    //     const { id } = this.props.match.params
    //     return (
    //         <div>
    //             {{getRedirect(id)}}
    //         </div>
    //     )

    // }

    // getRedirect = async (id)=> {
    //     try {
    //         let result = await axios.post("server", { id })
    //         if (result && result.url) {
    //             return <Redirect url={result.url} />
    //         }
    //     }
    //     catch { }
    //     return <p>Redirecting to 404 page...</p>
    // }


}



function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

