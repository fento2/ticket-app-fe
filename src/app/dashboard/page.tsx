import EventCharts from "@/components/shared/Chart";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Event Ticketing</h1>
        <EventCharts />
      </div>
    </>
  );
};
export default Dashboard;
