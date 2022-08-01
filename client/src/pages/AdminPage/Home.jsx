import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { Outlet } from "react-router";


const AdminPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar />         */}
        <div className="widgets">
          <Widget type="livingroom" />
          <Widget type="bathroom" />
          <Widget type="kitchen" />
          <Widget type="diningroom" />
        </div>
        <div className="charts">
          <Featured />
          <Chart  />
        </div>        
      </div>
      <Outlet/>
    </div>
  );
};

export default AdminPage;
