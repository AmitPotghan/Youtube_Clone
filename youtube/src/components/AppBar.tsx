export function AppBar(){
    return <div className="flex justify-between items-center z-20 p-2 mb-3 sticky top-0 bg-customBlack">
        <div className="flex items-center justify-center"><img src="/logo.png" className="h-6"alt="" /></div>
        <div className="flex">
            <input type="text" placeholder="Search YouTube" className="lg:w-96 bg-transparent border border-zinc-800 rounded-l-2xl pl-4 focus:outline-none focus:border-blue-500 hidden sm:inline-block"/>
            <button className="bg-zinc-800 rounded md:rounded-r-2xl px-5 h-9 flex items-center"><img src="/search.png" className="h-6 "alt="search" /></button>
        </div>
        <div><button className="bg-red-700 px-4 py-1 border rounded-md">Sign In</button></div>
    </div>
}