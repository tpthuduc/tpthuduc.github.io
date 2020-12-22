import * as React from "react";
import AliHeader from "./AliHeader";
import {Site} from "tabler-react";


function AliSite(props) {
    return props.children;
}

AliSite.Header = AliHeader;
AliSite.Footer = Site.Footer;
AliSite.Nav = Site.Node;
AliSite.Logo = Site.Logo;
AliSite.Wrapper = Site.Wrapper;

AliSite.displayName = "Site";

/** @component */
export default AliSite;
