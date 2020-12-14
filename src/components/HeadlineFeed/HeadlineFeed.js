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
    +sourceBaseUrl ?: string,
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
    sourceBaseUrl,
    subs,
}: Props): React.Node {
    const classes = cn("py-5 no-outline", className);
    return (
        <List.GroupItem className={classes}>
            <Media>
                <img src={imageUrl} href={sourceUrl} className="img-headline img-center-crop " target="_blank" rel="noopener noreferrer" />
                <Media.Body>
                    <Media.Heading>
                        
                        <div className="div-headline-source">
                            <img src={sourceImageUrl} href={sourceBaseUrl} className="img-headline-sourcelogo" target="_blank" rel="noopener noreferrer" />
                            <a className="text-default text-bl txt-headline-source" href={sourceBaseUrl}>{sourceName}</a>
                            <span className="middle-dot-headline text-default text-bl">⬤</span>
                            <span className="text-default text-bl txt-headline-source">{date}</span>
                        <a href={sourceUrl} className="h4 fe fe-activity float-right text-muted"></a>

                        </div>

                        <a href={sourceUrl} className="text-default text-bl" target="_blank" rel="noopener noreferrer">
                            <h4 class="headline">{title}</h4>
                        </a>
                    </Media.Heading>
                    <div className="text-description-headline">{description}</div>
                    {subs && <Media.List>{subs}</Media.List>}
                </Media.Body>
            </Media>
        </List.GroupItem>
    );
}

//HeadlineFeed.List = HeadlineFeedList;
HeadlineFeed.Sub = SubHeadlineFeed;

export default HeadlineFeed;