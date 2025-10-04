import Category from "@/components/core/Category";
import DivParentPage from "@/components/core/DivParentPage";
import SlideEvent from "@/components/core/SlideEvent";
import SwipeEvent from "@/components/core/SwipeEvent";
import TopEvent from "@/components/core/TopEvent";

export default function Home() {
  return (
    <>
      <DivParentPage className="my-8 space-y-12">

        <SwipeEvent title="swipe1" />

        <SlideEvent title="Feature Event" />

      </DivParentPage>

      {/* top event */}
      <TopEvent />

      <DivParentPage className="my-8 space-y-12">

        <Category />

        <SlideEvent title="Populer di" />

      </DivParentPage>


    </>
  );
}
