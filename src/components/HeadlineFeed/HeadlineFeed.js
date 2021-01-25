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
    storyId
}: Props): React.Node {
    const storyPath = storyId && ("/stories/" + storyId) || undefined;
    const classes = cn("p-5 no-outline", className);
    return (
        <Card>
            <Media className={classes}>
                <img src={imageUrl} href={sourceUrl} className="img-headline img-center-crop " target="_blank" rel="noopener noreferrer" />
                <Media.Body>
                    <Media.Heading>

                        <div className="div-headline-source">
                            <img src={sourceImageUrl} href={sourceBaseUrl} className="img-headline-sourcelogo" target="_blank" rel="noopener noreferrer" />
                            <a className="text-default text-bl txt-headline-source" href={sourceBaseUrl}>{sourceName}</a>
                            <span className="middle-dot-headline text-default text-bl">⬤</span>
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

                        <a href={sourceUrl} className="text-default text-bl" target="_blank" rel="noopener noreferrer">
                            <h4 className="headline">{title}</h4>
                        </a>
                    </Media.Heading>
                    <div className="text-description-headline">{description}</div>
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