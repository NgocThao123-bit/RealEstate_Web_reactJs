const columns = [
   
    { field: 'userName', title: 'User Name' },
    { field: 'email', title: 'Email'},       
    { field: 'role', title: 'Role', lookup: { admin: "Admin",visitor : "Visitor"} },   
    
  
  ];

  export default columns;