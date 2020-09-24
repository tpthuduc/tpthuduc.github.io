// @flow

import * as React from "react";
import AliHeader from "./AliHeader";
import {Site} from "tabler-react";

type Props = {|
+children: React.Node,
|};

function AliSite(props: Props): React.Node {
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
