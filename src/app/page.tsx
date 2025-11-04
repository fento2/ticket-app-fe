import Category from "@/components/shared/Category";
import DivParentPage from "@/components/shared/DivParentPage";
import Embla from "@/components/shared/Embla";
import SlideEvent from "@/components/shared/SlideEvent";
import SwipeEvent from "@/components/shared/SwipeEvent";
import TopEvent from "@/components/shared/TopEvent";

export default function Home() {
  return (
    <>
      <DivParentPage className="my-8 space-y-12">

        <SwipeEvent title="swipe1" />

        <SlideEvent title="Feature Event" />

      </DivParentPage>

      {/* top event */}
      <TopEvent />

      <Embla />

      <DivParentPage className="my-8 space-y-12">

        <Category />

        <SlideEvent title="Populer di" />

      </DivParentPage>
    </>
  );
}
