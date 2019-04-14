import React from 'react';

const VideoItem = ({ videos }) => {
    return <div>
        <b>{videos.snippet.title}</b>
        <i>{videos.snippet.description}</i>
    </div>;
}

export default VideoItem;