// @flow

import * as React from "react";

import {
    Page,
    Grid,
    Card,
    Text,
    Table,
    Alert,
    Progress,
    Button, StatsCard,
    BlogCard
} from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function Home() {
    return (
        <SiteWrapper>
        <Page.Content title="Tin Chính">
            <Grid.Row cards deck>
            <Grid.Col height={12} width={12} md={8}>
            <BlogCard
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
            </Grid.Col>
            <Grid.Col height={6} width={12} md={4}>
            <BlogCard
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
            </Grid.Col>
            <Grid.Col width={12} md={3}>
            <BlogCard
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
            </Grid.Col>
            <Grid.Col width={12} md={3}>
            <BlogCard
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
            </Grid.Col>
            <Grid.Col width={12} md={3}>
            <BlogCard
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
            </Grid.Col>
            <Grid.Col width={12} md={3}>
            <BlogCard
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
            </Grid.Col>
            </Grid.Row>
            <Page.Header
          title="Tin khác"
        />
            <Grid.Row cards deck >
          <Grid.Col width={12}>
            <BlogCard
              aside
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"And this isn&#39;t my nose. This is a false one."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
              }
              profileHref={"./profile.html"}
              authorName={"Rose Bradley"}
              avatarImgSrc={"./demo/faces/female/18.jpg"}
              date={"3 days ago"}
            />
          </Grid.Col>
          <Grid.Col width={12}>
            <BlogCard
              aside
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"Well, I didn't vote for you."}
              postHref={"#"}
              title={"And this isn't my nose. This is a false one."}
              description={
                "Well, we did do the nose. Why? Shut up! Will you shut up?! You don't frighten us, English pig-dog..."
              }
              profileHref={"./profile.html"}
              authorName={"Peter Richards"}
              avatarImgSrc={"./demo/faces/male/16.jpg"}
              date={"3 days ago"}
            />
          </Grid.Col>
          <Grid.Col width={12}>
            <BlogCard
              aside
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"Weaseling out of things is important to learn."}
              postHref={"#"}
              title={"Weaseling out of things is important to learn."}
              description={
                "Please do not offer my god a peanut. That's why I love elementary school, Edna. The children believe anything you tell them. Brace yourselves gentlemen. According to the gas chromatograph, the secr..."
              }
              profileHref={"./profile.html"}
              authorName={"Bobby Knight"}
              avatarImgSrc={"./demo/faces/male/4.jpg"}
              date={"3 days ago"}
            />
          </Grid.Col>
          <Grid.Col width={12}>
            <BlogCard
              aside
              imgSrc={"https://media.laodong.vn/Storage/NewsPortal/2020/9/24/838759/Nancy-Pelosi.jpg?w=888&h=592&crop=auto&scale=both"}
              imgAlt={"You don't like your job, you don't strike."}
              postHref={"#"}
              title={"You don't like your job, you don't strike."}
              description={
                "But, Aquaman, you cannot marry a woman without gills. You're from two different worlds… Oh, I've wasted my life. Son, when you participate in sporting events, it's not whether you win or lose: it's..."
              }
              profileHref={"./profile.html"}
              authorName={"Craig Anderson"}
              avatarImgSrc={"./demo/faces/male/35.jpg"}
              date={"3 days ago"}
            />
          </Grid.Col>
            </Grid.Row>
        </Page.Content>
        </SiteWrapper>
    )
}

export default Home;