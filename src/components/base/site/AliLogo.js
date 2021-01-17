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
    <a className="header-brand nav-link pr-0 leading-none" href={props.href}>
        <img src={props.src} className="header-brand-img" alt={props.alt} />
        <span className="m1-2 d-lg-block">
            <span className="text-default font-weight-bold">
                {props.title}
            </span>
            <small className="text-blue d-block mt-1 dt" style={{fontSize: "1rem"}}>
                {props.description}
            </small>
        </span>
    </a>
)

AliLogo.displayName="AliLogo";
export default AliLogo;