import { string } from "prop-types";
// @flow
import * as React from "react";
import { LoaderDots } from '@thumbtack/thumbprint-react';


type Props = {|
+href ?: string,
    +src ?: string,
    +alt ?: string,
    +title ?: string,
    +description ?: string
        |};
class AliLogo extends React.PureComponent {
    render() {
        const isFetching = this.props.isFetching || false;
        return (
            <a className="header-brand nav-link pr-0 leading-none" href={this.props.href}>
                <img src={this.props.src} className="header-brand-img" alt={this.props.alt} />
                <span className="m1-2 d-lg-block">
                    <span className="text-default font-weight-bold">
                        {this.props.title}
                    </span>
                    <span className="sub-branding layered">
                        {!isFetching ?
                            <small className="text-blue d-block mt-1 dt" style={{ fontSize: "1rem" }}>
                                {this.props.description}
                            </small> :
                            <span className="sub-branding-loader" ><LoaderDots size="small" /></span>}
                    </span>
                </span>
            </a>)
    }
}

export default AliLogo;