import Category from "@/components/shared/Category";
import SectionParentPage from "@/components/shared/SectionParentPage";
import BannerSlide from "@/components/shared/BannerSlide";
import TopEvent from "@/components/shared/TopEvent";
import EventSlide from "@/components/shared/EventSlide";

export default function Home() {
  return (
    <section>
      <SectionParentPage className="space-y-6">

        <BannerSlide />

        <EventSlide title="Featured Events" />

        <EventSlide title="New Event" />

      </SectionParentPage>

      <TopEvent />

      <SectionParentPage className=" space-y-6">

        <Category />

        <EventSlide title="Populer di" />

      </SectionParentPage>
    </section>
  );
}
