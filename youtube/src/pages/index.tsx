import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";
export default function Home() {
  return (
    <div className="flex">
      <SideBar/>
      <div>
        <AppBar/>
        <VideoGrid/>
      </div>
    </div>
  );
}
