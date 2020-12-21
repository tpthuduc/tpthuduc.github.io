import * as React from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";
export default class ViewDetailRedirect extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const {id} = this.props.match.params
        axios.post("server",{id}).then(result=>{
            if(result && result.url) {
                return <Redirect url={result.url}/>
            }
        }).catch(err=>{
            console.log(err);
            return <p>Redirecting to 404 page...</p>
        })
    }

    
}



function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

