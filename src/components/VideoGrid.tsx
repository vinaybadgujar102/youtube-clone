import VideoCard from "./VideoCard"

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "/photo.jpg",
    thumbImage: "/photo.jpg",
    author: "Harkirat Singh",
    views: "100k",
    timestamp: "2 days",
},
{
    "title": "Mastering the Art of Cooking | Culinary Adventure",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Isabella Martinez",
    "views": "75k",
    "timestamp": "1 week ago"
},
{
    "title": "Traveling on a Budget | Budget-Friendly Adventures",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Samuel Robinson",
    "views": "50k",
    "timestamp": "3 days ago"
},{
    "title": "Mastering the Art of Cooking | Culinary Adventure",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Isabella Martinez",
    "views": "75k",
    "timestamp": "1 week ago"
},{
    "title": "Mastering the Art of Cooking | Culinary Adventure",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Isabella Martinez",
    "views": "75k",
    "timestamp": "1 week ago"
},{
    "title": "Mastering the Art of Cooking | Culinary Adventure",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Isabella Martinez",
    "views": "75k",
    "timestamp": "1 week ago"
},{
    "title": "Mastering the Art of Cooking | Culinary Adventure",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Isabella Martinez",
    "views": "75k",
    "timestamp": "1 week ago"
},{
    "title": "Mastering the Art of Cooking | Culinary Adventure",
    "image": "/photo.jpg",
    "thumbImage": "/photo.jpg",
    "author": "Isabella Martinez",
    "views": "75k",
    "timestamp": "1 week ago"
},
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard 
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp} />
            </div>)}
    </div>
}