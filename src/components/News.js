import React from 'react';
import Parser from 'rss-parser';

const parser = new Parser();
const feedUrl = 'https://earthquake-report.com/feed/';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
        }
    }
    componentWillMount(){
        this.parseFeed();
    }

    parseFeed = async () => {
        const feeds =  parser.parseURL(feedUrl);
        console.log(feeds);
    }

    render(){
        return <h1>News</h1>
    }
}