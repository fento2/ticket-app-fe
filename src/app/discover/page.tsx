import { Filter } from "./components/Filter"

const Discover = () => {
    return (
        <div>
            <div className="flex">
                <div className="sticky top-20 h-screen">
                    <Filter />
                </div>
                <div className="overflow-y-auto h-[2000px] flex-1 bg-amber-300">
                    {/* konten panjang */}
                </div>
            </div>
            <div className="h-[200px]">

            </div>
        </div>
    )
}
export default Discover