const columns = [
    { field: 'listingPhoto', title: 'Image', render: (rowData) => <img src={rowData.listingPhoto} style={{ width: 100, borderRadius: "10%" }} />, },
    { field: 'location', title: 'Location' },
    { field: 'type', title: 'Type', lookup: { "Rent": "Rent", "Buy": "Buy" }, minWfieldth: 10, },
    { field: 'propertyTypeID', title: 'HomeTypes', lookup: { 1: "Apartment", 2: "Multi-family", 3: "Single-family" } },
    { field: 'beds', title: 'Beds', align: 'center', },
    { field: 'baths', title: 'Baths', align: 'center', },
    {
      field: 'sqft',
      title: 'Sqft\u00a0(m\u00b2)',
      maxWidth: '10px',
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      field: 'price',
      title: 'Price\u00a0($)',
      // minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  
    { field: 'status', title: 'Status', lookup: { true: "Not available", false: "Available" }  },
    // { field: 'description', title: 'Description' },
  
  ];

  export default columns;