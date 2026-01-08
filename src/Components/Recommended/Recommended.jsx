import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
const recommendedVideos = [
  {
    id: 1,
    thumbnail: thumbnail1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 3,
    thumbnail: thumbnail3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 4,
    thumbnail: thumbnail4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 5,
    thumbnail: thumbnail5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 6,
    thumbnail: thumbnail6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 7,
    thumbnail: thumbnail7,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  },
  {
    id: 8,
    thumbnail: thumbnail8,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "199k Views"
  }
];


const Recommended = () => {
  return (
    <div className='recommended'>
        {recommendedVideos.map((video) => (
            <div className='side-video-list' key={video.id}>
            <img src={video.thumbnail} alt='' />
            <div className="vid-info">
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
                <p>{video.views}</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Recommended
