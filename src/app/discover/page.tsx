import SectionParentPage from "@/components/shared/SectionParentPage"
import { Filter } from "./components/Filter"

const Discover = () => {
    return (
        <SectionParentPage>
            <div className="flex gap-3" >
                <div className="">
                    <Filter />
                </div>
                <div className="overflow-y-auto h-[2000px] flex-1 bg-amber-300">
                    {/* konten panjang */}
                </div>
            </div>
            <div className="h-[200px]">

            </div>
        </SectionParentPage>
    )
}
export default Discover