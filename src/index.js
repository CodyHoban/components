import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="I agree with this"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex"
                timeAgo="Today at 2:00PM"
                content="Could have been more precise"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 7:30PM"
                content="NOPE!"
                avatar={faker.image.avatar()}
            />
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));