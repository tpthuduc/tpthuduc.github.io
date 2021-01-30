// @flow

import * as React from "react";
import cn from "classnames";
import { Media, List, Card, Button } from "tabler-react";
import SubHeadlineFeed from "./SubHeadlineFeed";
import { Link } from "react-router-dom";

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
    storyId,
    isLargeItem
}: Props): React.Node {
    const storyPath = storyId && ("/stories/d/" + storyId) || undefined;
    const classes = cn("p-5 no-outline", className);
    return (
        <Card>
            <Media className={classes}>
                <img src={imageUrl} href={sourceUrl} className={isLargeItem ? "img-headline img-center-crop d-none d-sm-block" : "img-headline img-center-crop"} target="_blank" rel="noopener noreferrer" />
                <Media.Body>
                    {isLargeItem && <img src={imageUrl} href={sourceUrl} className="d-block d-sm-none pb-3" target="_blank" rel="noopener noreferrer" />}
                    <div className="div-headline-source">
                        <img src={sourceImageUrl} href={sourceBaseUrl} className="img-headline-sourcelogo float-left" target="_blank" rel="noopener noreferrer" />
                        <div className="float-left"><a className="text-default text-bl txt-headline-source" href={sourceBaseUrl}>{sourceName}</a></div>
                        <div className={!isLargeItem && "d-none d-sm-block" + " float-left"}>
                            <span className="middle-dot-headline text-default text-bl ">⬤</span>
                            <span className="text-default text-bl txt-headline-source">{date}</span>
                            {storyPath && (
                                <div className="float-right btn-story d-none d-md-block">
                                    <Link to={{ pathname: storyPath }} >
                                        <span className="input-group-btn ml-2">
                                            <Button
                                                size="sm"
                                                color="vimeo"
                                                type="submit"
                                                icon="activity"
                                                className="btn-story"
                                            >Xem toàn cảnh</Button>
                                        </span>
                                    </Link>
                                </div>)}
                        </div>

                    </div>

                    <a href={sourceUrl} className="text-default text-bl" target="_blank" rel="noopener noreferrer">
                        <h4 className={isLargeItem ? "headline_large" : "headline"}>{title}</h4>
                    </a>
                    <div className="text-description-headline d-none d-sm-block">{description}</div>
                    {!isLargeItem && <div className="text-default text-bl txt-headline-source d-block d-sm-none">{date}</div>}

                    {subs && <Media.List>{subs}</Media.List>}

                </Media.Body>
            </Media>
            {storyPath && (
                <div className="text-center btn-story d-block d-md-none pb-4">
                    <Link to={{ pathname: storyPath }} >
                        <span className="input-group-btn ml-2">
                            <Button
                                size="sm"
                                color="vimeo"
                                type="submit"
                                icon="activity"
                                className="btn-story"
                            >Xem toàn cảnh</Button>
                        </span>
                    </Link>
                </div>)}
        </Card >
    );
}

//HeadlineFeed.List = HeadlineFeedList;
HeadlineFeed.Sub = SubHeadlineFeed;

export default HeadlineFeed;