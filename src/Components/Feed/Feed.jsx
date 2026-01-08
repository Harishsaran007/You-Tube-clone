import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import {Link} from 'react-router-dom'
const videoData = [
  {
    id: 1,
    thumbnail: thumbnail1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "15k",
    time: "2 days ago",
    categoryId: 20,
    videoId: 4521
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "32k",
    time: "1 day ago",
    categoryId: 20,
    videoId: 4522
  },
  {
    id: 3,
    thumbnail: thumbnail3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4523
  },
  {
    id: 4,
    thumbnail: thumbnail4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4524
  },
  {
    id: 5,
    thumbnail: thumbnail5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4525
  },
  {
    id: 6,
    thumbnail: thumbnail6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4526
  },
  {
    id: 7,
    thumbnail: thumbnail7,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4527
  },
  {
    id: 8,
    thumbnail: thumbnail8,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4528
  },
  {
    id: 9,
    thumbnail: thumbnail1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "15k",
    time: "2 days ago",
    categoryId: 20,
    videoId: 4529
  },
  {
    id: 10,
    thumbnail: thumbnail2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "32k",
    time: "1 day ago",
    categoryId: 20,
    videoId: 4530
  },
  {
    id: 11,
    thumbnail: thumbnail3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4531
  },
  {
    id: 12,
    thumbnail: thumbnail4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4532
  },
  {
    id: 13,
    thumbnail: thumbnail5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4533
  },
  {
    id: 14,
    thumbnail: thumbnail6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4534
  },
  {
    id: 15,
    thumbnail: thumbnail7,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4535
  },
  {
    id: 16,
    thumbnail: thumbnail8,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    channel: "VJ Siddhu vlog",
    views: "50k",
    time: "3 days ago",
    categoryId: 20,
    videoId: 4536
  },
  
];



const Feed = () => {
  return (
    <div className="feed">
        <div className="feed">
            {videoData.map((video) => (
                <Link
                key={video.id}
                to={`/video/${video.categoryId}/${video.videoId}`}
                className="card"
                >
                <img src={video.thumbnail} alt="" />
                <h2>{video.title}</h2>
                <h3>{video.channel}</h3>
                <p>
                    {video.views} views &bull; {video.time}
                </p>
                </Link>
            ))}
        </div>

    </div>
    
  )
}

export default Feed
