import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel(){
    return (
        <div className='storyReel'>
            <Story image="https://picsum.photos/id/237/200/300" profileSrc="https://picsum.photos/id/227/200/300" title="Tracy" />
            <Story image="https://picsum.photos/id/137/200/300" profileSrc="https://picsum.photos/id/112/200/300" title="Ted" />
            <Story image="https://picsum.photos/id/267/200/300" profileSrc="https://picsum.photos/id/145/200/300" title="Barney" />
            <Story image="https://picsum.photos/id/7/200/300" profileSrc="https://picsum.photos/id/220/200/300" title="Marshal" />
            <Story image="https://picsum.photos/id/230/200/300" profileSrc="https://picsum.photos/id/211/200/300" title="Lily" />
            <Story image="https://picsum.photos/id/130/200/300" profileSrc="https://picsum.photos/id/210/210/300" title="Robin" />
        </div>
    )
}

export default StoryReel;