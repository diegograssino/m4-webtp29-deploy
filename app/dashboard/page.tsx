import DashboardComponent from "@/ui/pages/DashboardComponent/DashboardComponet";
import WithAuth from "@/ui/WithAuth/WithAuth";

const Dashboard = () => {
  return (
    <WithAuth>
      <DashboardComponent />
    </WithAuth>
  );
};

export default Dashboard;
