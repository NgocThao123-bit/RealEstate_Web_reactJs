import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import  BasicTable  from "../../components/table/houseTable"
import colunmHouse from '../../components/Data/columnHouse';
const ListHouse = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <div className="datatable">
           <BasicTable columns={colunmHouse}/>
        </div>       
      </div>
    </div>
  )
}

export default ListHouse