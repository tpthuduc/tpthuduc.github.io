// @flow

import * as React from "react";
import { Media , List} from "tabler-react";

type Props = {|
    +children ?: React.Node,
    +className ?: string,
    +imageUrl ?: string,
    +date ?: string,
    +title ?: string,
    +description ? : string,
    +sourceImageUrl ?: string,
    +sourceName ? : string,
    +sourceUrl ?: string,
    +subs: React.Node,
    |};

function SubHeadlineFeed({
    className,
    children,
    imageUrl,
    date,
    title,
    description,
    sourceImageUrl,
    sourceName,
    sourceUrl,
    subs,
}: Props): React.Node {
    return (
        <Media.ListItem className={className}>
            <a href={sourceUrl} className="text-bl text-default ">

            <Media.Body>
                <h6>{title}</h6>
                {description}
            </Media.Body>
            </a>

        </Media.ListItem>
    );

}

export default SubHeadlineFeed;