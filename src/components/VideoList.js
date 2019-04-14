import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    let key = 0;
    const renderedList = videos.map((video) => {
        console.log(video);
        key++;
        return (<VideoItem key={key} videos={video} />
        );
    });

    return <div>{renderedList}</div>;
};

export default VideoList;