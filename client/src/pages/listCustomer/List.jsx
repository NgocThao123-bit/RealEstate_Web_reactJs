import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import columnCustomer from "../../components/Data/colunmCustomer"
import CustomerTable from "../../components/table/customerTable"
const ListCustomer = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <div className="datatable">
           <CustomerTable columns={columnCustomer}/>
        </div>       
      </div>
    </div>
  )
}

export default ListCustomer