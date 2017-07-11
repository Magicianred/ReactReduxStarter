import React from 'react';

const VideoList = ({video, onVideoSelect}) => {
    //const video = props.video; can be changed with {video} on the funzion declaration
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item col-md-12">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
            
        </li>
    );
};

export default VideoList;