import { VIDEOS } from "./VideosData"
import { useRouter } from "next/router"
export function VideoCardHorizontal(){
    return <div className="md:col-span-3">
        {VIDEOS.map(video=><div>
            <VideoHorizontal
                id={video.id}
                title={video.title} 
                thumbImage={video.thumbImage}
                image={video.image}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}/>
        </div>)}
    </div>
}
function VideoHorizontal(props:any){
    const router = useRouter();
    return <div onClick={()=>{
        router.push({
            pathname:`/video/videos`,
            query:{id:props.id}
        })
    }}className=" flex flex-col lg:grid lg:grid-cols-7 mx-2 mb-2 text-sm" id={props.id}>
        <div className="border-0 rounded-lg lg:col-span-3"><img src={props.thumbImage} className="w-auto h-auto md:w-50 md:h-24 md:w-64 2xl:h-36 border-0 rounded-lg" alt="" /></div>
        <div className="px-3 pb-1 pt-2 md:col-span-4 2xl:col-span-3">
            <span className="">{props.title}</span>
            <div className="text-gray-500 font-sans mt-1.5">{props.author}</div>
            <div>
                <div className="text-gray-500 font-sans mr-1 text-xs">{props.views}|{props.timestamp}</div>
            </div>
        </div>
    </div>
}