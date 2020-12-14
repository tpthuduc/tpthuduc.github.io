// @flow

import * as React from "react";
import { Media, List } from "tabler-react";

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
    sourceBaseUrl,
    subs,
}: Props): React.Node {
    return (
        <Media.ListItem className={className}>

            <Media.Body className="subheadline">
                <span className="middle-dot-headline text-default text-bl">⬤</span>
                <span>
                    <a href={sourceUrl} className="text-bl text-default txt-subheadline" target="_blank" rel="noopener noreferrer">
                        <strong>{title}</strong>
                    </a>
                    <div className="div-subheadline-source">
                        <a className="text-default text-bl txt-headline-source" href={sourceBaseUrl}>{sourceName}</a>
                        <span className="middle-dot-headline text-default text-bl">⬤</span>
                        <span className="text-default text-bl txt-headline-source">{date}</span>
                    </div>
                </span>

            </Media.Body>

        </Media.ListItem>
    );

}

export default SubHeadlineFeed;