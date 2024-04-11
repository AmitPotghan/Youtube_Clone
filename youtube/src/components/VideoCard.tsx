import {useRouter} from "next/router";
export function VideoCard(props:any){
    const router = useRouter();
    return <div onClick={()=>{
        router.push({
            pathname:`/video/videos`,
            query:{id:props.id}
        })
    }} className="p-1 mb-7 cursor-pointer" id={props.id}>
        <img src={props.thumbImage} className="rounded-lg" alt="image" />
        <div className="flex mt-2">
            <div><img src={props.image} className="size-10 rounded-full p"alt="" /></div>
            <div className="pl-2">
                <span>{props.title}</span>
                <div className="text-gray-500 font-sans mt-1.5">{props.author}</div>
                <div className="flex">
                    <div className="text-gray-500 font-sans mr-1 text-xs">{props.views} | {props.timestamp}</div>

                </div>
            </div>
        </div>
    </div>
}