import Category from "@/components/shared/Category";
import DivParentPage from "@/components/shared/DivParentPage";
import BannerSlide from "@/components/shared/BannerSlide";
import TopEvent from "@/components/shared/TopEvent";
import EventSlide from "@/components/shared/EventSlide";

export default function Home() {
  return (
    <section>
      <DivParentPage className="my-8 space-y-12">

        <BannerSlide />

        <EventSlide title="Featured Events" />

      </DivParentPage>

      <TopEvent />

      <DivParentPage className="my-8 space-y-12">

        <Category />

        <EventSlide title="Populer di" />

      </DivParentPage>
    </section>
  );
}
