import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import  BasicTable  from "../../components/table/userTable"
import columns from '../../components/Data/columnUser'
const ListUser = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <div className="datatable">
           <BasicTable columns={columns}/>
        </div>       
      </div>
    </div>
  )
}

export default ListUser