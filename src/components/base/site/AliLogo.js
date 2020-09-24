import { string } from "prop-types";
// @flow
import * as React from "react";

type Props = {|
+href?: string,
+src?: string,
+alt?: string,
+title?: string,
+description?: string
|};

const AliLogo = (props: Props): React.Node => (
    <a className="header-brand" href={props.href}>
        <img src={props.src} className="header-brand-img" alt={props.alt} />
        <div className="container">
            <div className="column">
                <div className="content one">
                    {props.title}
                </div>
            </div>
            <div className="column">
                <div className="content two">
                    {props.description}
                </div>
            </div>
        </div>
    </a>
)

AliLogo.displayName="AliLogo";
export default AliLogo;