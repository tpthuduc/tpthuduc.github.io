// @flow

import * as React from "react";
import cn from "classnames";
import { Header, Text, Media, List } from "tabler-react";
import SubHeadlineFeed from "./SubHeadlineFeed";

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
|}

function HeadlineFeed({
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
    const classes = cn("py-5", className);
    return (
        <List.GroupItem className={classes}>
            <Media>
                <Media.Object avatar objectURL={imageUrl} size="xxl" className="mr-4" />
                <Media.Body>
                    <Media.Heading>
                        <small className="float-right text-muted">{date}</small>
                        <a href={sourceUrl} className="text-default text-bl">

                            <h4 class="headline">{title}</h4>
                        </a>
                    </Media.Heading>
                    <Text>{description}</Text>
                    {subs && <Media.List>{subs}</Media.List>}
                </Media.Body>
            </Media>
        </List.GroupItem>
    );
}

//HeadlineFeed.List = HeadlineFeedList;
HeadlineFeed.Sub = SubHeadlineFeed;

export default HeadlineFeed;