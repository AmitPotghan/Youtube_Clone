import { AppBar } from "@/components/AppBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { useRouter } from "next/router";
import { VIDEOS } from "@/components/VideosData";

export default function VideoPage() {
    const router = useRouter();
    const id = router.query.id;

    let title = "";
    let author = "";
    let views = "";
    let timestamp = "";

    if (typeof id === 'string') {
        const idNumber = parseInt(id);
        if (!isNaN(idNumber) && idNumber >= 1 && idNumber <= VIDEOS.length) {
            const videoIndex = idNumber - 1;
            const video = VIDEOS[videoIndex];
            title = video.title;
            author = video.author;
            views = video.views;
            timestamp = video.timestamp;
        } else {
            // Handle invalid id
            title = "Video not found";
            console.log("hello")
            // Handle other fields accordingly
        }
    } else {
        // Handle undefined id
        title = "Video ID not provided";
        console.log("hello")
        // Handle other fields accordingly
    }

    return (
        <div>
            <AppBar />
            <div className="flex flex-col md:grid md:grid-cols-10">
                <div className="md:col-span-7">
                    <video className="z-10 border-b rounded-lg" width={"100%"} height={"720px"} controls src={`/${id}.mp4`} />
                    <div className="text-lg leading-6 my-2 flex">
                        <div className="flex items-center justify-center m-2"><img src="/thumb.png" className="w-12 h-10 rounded-full" alt="" /></div>
                        <div>
                            <span>{title}</span>
                            <div className="text-gray-500 text-sm font-sans">{author} | {views} | {timestamp}</div>
                        </div>
                    </div>
                </div>
                <VideoCardHorizontal />
            </div>
        </div>
    );
}
