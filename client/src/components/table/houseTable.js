import MaterialTable from "material-table";
import React,{  useEffect, useState } from "react";
import tableIcons from "./tableIcons";
import HouseApi from "../../api/houseApi";
// import { Delete } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Typography } from "@mui/material";
import { House } from "@mui/icons-material";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BasicTable({columns}) {

  const [selectedRow, setSelectedRow] = useState(null);

  const [Houses, setHouses] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [severity, setSeverity] = useState('');
  // const housesRef = useRef();
  // housesRef.current = Houses;

  const [open, setOpen] = useState(false);
  const vertical = 'bottom'
  const horizontal = 'right';
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    retrieveHouses();
  }, []);

  const retrieveHouses = () => {
    let startTime = new Date();
    HouseApi.getAll()
      .then(response => {
        setHouses(response.data);
        console.log("Client Side Submit Axios Post Elapsed time in milliseconds")
        let elapsedTime = (new Date() - startTime);
        console.log("Client Side Axios elapsed time..", elapsedTime);

      })
      .catch(e => {
        console.log(e);
      });
  };

  //function for updating the existing row details
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.sqft === "") {
      errorList.push("Try Again, You didn't enter the sqft field")
      setSeverity('warning')
    }
    // if (newData.listingPhoto === "") {
    //   errorList.push("Try Again, You didn't enter the listingPhoto field")
    //   setSeverity('warning')
    // }
    if (newData.location === "") {
      errorList.push("Try Again, location field can't be blank")
      setSeverity('warning')
    }
    // if (newData.type === "") {
    //   errorList.push("Try Again, Enter type before submitting")
    //   setSeverity('warning')
    // }
    if (newData.price === "") {
      errorList.push("Try Again, Enter price before submitting")
      setSeverity('warning')
    }

    if (errorList.length < 1) {
   
      HouseApi.update(newData)
        .then(response => {
          const updateHouse = [...Houses];
          const index = oldData.tableData.id;
          updateHouse[index] = newData;
          setHouses([...updateHouse]);
          console.log(newData)
          resolve()
          setOpen(true)
          setErrorMessages("Update success")
          setSeverity('success')
          console.log(errorList)
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setOpen(true)
          setSeverity('error')
          resolve()

        })
    } else {
      setErrorMessages(errorList)
      setSeverity('warning')
       setOpen(true)
      resolve()

    }
   
  }

  const handleRowDelete = (oldData, resolve) => {

    console.log(oldData.houseID)

    HouseApi.remove(oldData.houseID)
      .then(response => {
        const dataDelete = [...Houses];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setHouses([...dataDelete]);
        resolve()
        setErrorMessages(["Delete success! "])
        setOpen(true)
        setSeverity('success')
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setOpen(true)
        resolve()
      })
  }
  // const handleDeleteRows = (event, rowData) => {
  //   let _data = [...Houses];
  //   rowData.forEach(rd => {
  //     _data = _data.filter(t => t.tableData.id !== rd.tableData.id);
  //     // HouseApi.remove()
  //     console.log(rd.tableData.houseID)
  //   });
  //   setHouses(_data);
  // };
  return (
    <>
      <MaterialTable
        title="House Table"
        columns={columns}
        data={Houses}
        icons={tableIcons}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        actions={[
          {
            icon: () => <Link to={'/admin/products/new'}><Icon style={{ color: '#2e7d32' }}><AddBoxIcon sx={{ fontSize: 30 }} /></Icon></Link>,
            tooltip: 'Create House',
            isFreeAction: true,
            onClick: (event, rowData) => localStorage.setItem('selectedRowData', rowData)
          },
          // {
          //   icon: () => <Delete />,
          //   tooltip: "Delete Rows",
          //   onClick: handleDeleteRows
          // }
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              handleRowUpdate(newData, oldData, resolve);

            }),

          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            }),
        }}
        options={{
          // selection: true,
          cellStyle: {
            width: 200,
            maxWidth: 200,
            // height:10,
          },
          headerStyle: {
            fontSize: '1rem',
            fontWeight: 'bold',
            width: 200,
            maxWidth: 200,
            backgroundColor: '#D3D3D3',
            // whiteSpace: 'nowrap',
            color: '#2e7d32'
          },
          rowStyle: rowData => ({
            padding: 0,
            margin: 0,
            fontSize: 15,
            height: 10,
            // whiteSpace: 'nowrap',            
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
          })
        }}

        detailPanel={[
          {
            tooltip: 'Show detail',
            render: rowData => {
              return (
                <div
                  style={{                   
                    textAlign: 'flex',
                    fontSize: '1rem',
                    backgroundColor: '#D3D3D3',
                  }}
                >
                  <Grid
                    container spacing={0}
                  >
                    <Grid item xs={6} style={{padding:'10px'}}>
                      <Typography variant="h6">Description:</Typography>
                      <Typography variant="p"style={{color:'black'}}>
                        {rowData.description}
                      </Typography>
                      
                    </Grid>
                    <Grid item xs={6}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={rowData.map}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="myFrame"
                      />
                    </Grid>
                  </Grid>

                </div>

              )
            }
          }
        ]}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}

        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {errorMessages}
        </Alert>
      </Snackbar>
    </>
  )

};

export default BasicTable;