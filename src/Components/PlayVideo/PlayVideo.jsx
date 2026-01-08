import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const commentsData = [
  {
    id: 1,
    name: "Manikandan",
    time: "1 day ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 244
  },
  {
    id: 2,
    name: "Manikandan",
    time: "2 days ago",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 180
  },
  {
    id: 3,
    name: "Manikandan",
    time: "3 days ago",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    likes: 99
  },
  {
    id: 4,
    name: "Manikandan",
    time: "1 day ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 244
  },
  {
    id: 5,
    name: "Manikandan",
    time: "2 days ago",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 180
  },
  {
    id: 6,
    name: "Manikandan",
    time: "3 days ago",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    likes: 99
  },
];



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best YouTube Channel to learn web Development</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt='' /> 125</span>
                <span><img src={dislike} alt='' /> 2</span>
                <span><img src={share} alt='' /> Share</span>
                <span><img src={save} alt='' /> Save</span>
            </div>
            <hr />
            <div className='publisher'>
                <img src={jack} alt=''/>
                <div>
                    <p>VJ Siddhu vlog</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
                </div>
                <div className='vid-description'>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr />
                    <h4>130 Comments</h4>
                    {commentsData.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <img src={user_profile} alt="" />
                        <div>
                        <h3>
                            {comment.name} <span>{comment.time}</span>
                        </h3>
                        <p>{comment.text}</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>{comment.likes}</span>
                            <img src={dislike} alt="" />
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      
    
  )
}

export default PlayVideo
