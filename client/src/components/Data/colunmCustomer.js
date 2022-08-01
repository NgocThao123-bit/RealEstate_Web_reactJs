 const columns = [
    { field: 'lastName', title: 'LastName' },
    { field: 'firstName', title: 'FirstName'},   
    { field: 'phoneNumber', title: 'Phone number'},     
    { field: 'status', title: 'Status', lookup: { true: "Complete",false : "UnComplete"} },
    
    
  
  ];

  export default columns;