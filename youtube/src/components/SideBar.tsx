export function SideBar(){
    return (
        <div className="hidden md:inline-block w-24 h-fullpr-3 sticky left-0">
            <Menu/>
            <Button image="/home.svg" title="Home"></Button>
            <Button image="/shorts.svg" title="Shorts"></Button>
            <Button image="/subsciptions.svg" title="Favourite"></Button>
            <Button image="/you.svg" title="You"></Button>
        </div>
    );
}

function Menu(){
    return <div className="flex items-center justify-center mt-1 px-3 py-2">
        <button className="flex items-center justify-center w-10 h-10 border-0 hover:bg-zinc-800 rounded-full">
            <img src="/menu.svg" className="h-5" alt="" />
        </button>
    </div>
}
function Button(props:any){
    return <div className="flex items-center justify-center w-16 h-16  border-0 hover:bg-zinc-800 rounded-md">
        <button className="flex flex-col items-center justify-center w-10 h-10">
            <img src={props.image} className="h-5" alt="" />
            <span className="text-xs mt-1">{props.title}</span>
        </button>
    </div>
}