import SectionParentPage from "@/components/shared/SectionParentPage"
import { Filter } from "./components/Filter"

const Discover = () => {
    return (
        <SectionParentPage>
            <div className="flex gap-3" >
                <div className="">
                    <Filter />
                </div>
                <div className="overflow-y-auto  flex-1 bg-amber-300">
                    {/* konten panjang */}
                </div>
            </div>
        </SectionParentPage>
    )
}
export default Discover