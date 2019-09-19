import React from 'react';
import Parser from 'rss-parser';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const parser = new Parser(
    {
        headers: {'origin': 'EQ Monitor'}
    }
);
const feedUrl = 'http://www.earthquakenewstoday.com/feed';

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
        const feeds = await parser.parseURL(feedUrl);
        console.log(feeds);
    }

    render(){
    
        return (
            <Drawer
                open={this.props.open}
                anchor="right"
            >
                <div>
                    <IconButton onClick={this.props.onCloseNews}>
                        {this.props.open ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronLeft} />}
                    </IconButton>
                </div>
                
                <Divider />

                <h1>News</h1>
                
            </Drawer>
      );
    }
}

export default News;