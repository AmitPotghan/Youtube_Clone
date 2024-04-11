import { VideoCard } from "./VideoCard"
import { SideBar } from "./SideBar"
import { VIDEOS } from "./VideosData"

export const VideoGrid = ()=>{
    return <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 bg-customBlack text-white">
            {VIDEOS.map(video=><div>
                <VideoCard
                    id={video.id}
                    title={video.title} 
                    thumbImage={video.thumbImage}
                    image={video.image}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}/>
            </div>)}
        </div>
    </div>
}