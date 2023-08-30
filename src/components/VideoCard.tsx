export default function VideoCard() {
    return <div>
        <img src="/thumbnail1.jpg" className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={"rounded-full w-20 h-20"} src="/thumbnail1.jpg"></img>
            </div>
            <div className="col-span-11">
                <div>
                    Jawan: Chaleya(Hindi) | Sharukh Khan
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    T-Series
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    64Mn | 13 days ago
                </div>
            </div>
        </div>
    </div>
} 