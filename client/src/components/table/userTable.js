import MaterialTable from "material-table";
import React, { createRef, useEffect, useRef, useState } from "react";
import tableIcons from "./tableIcons";
import HouseApi from "../../api/houseApi";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Typography } from "@mui/material";
import accountApi from "../../api/accountApi";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function UserTable({ columns }) {

    const [selectedRow, setSelectedRow] = useState(null);
    const [user, setuser] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
    const [severity, setSeverity] = useState('');
    const userRef = useRef();
    userRef.current = user;

    const [open, setOpen] = useState(false);
    const vertical = 'bottom'
    const horizontal = 'right';
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        retrieveuser();
    }, []);

    const retrieveuser = () => {
        accountApi.getAll()
            .then(response => {
                setuser(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    //function for updating the existing row details
    const handleRowUpdate = (newData, oldData, resolve) => {
        //validating the data inputs
        let errorList = []
        if (newData.userName === "") {
            errorList.push("Try Again, You can't fix the username field")
            setSeverity('warning')
        }
        // if (newData.listingPhoto === "") {
        //   errorList.push("Try Again, You didn't enter the listingPhoto field")
        //   setSeverity('warning')
        // }
        // if (newData.location === "") {
        //   errorList.push("Try Again, location field can't be blank")
        //   setSeverity('warning')
        // }
        // if (newData.type === "") {
        //   errorList.push("Try Again, Enter type before submitting")
        //   setSeverity('warning')
        // }
        // if (newData.price === "") {
        //   errorList.push("Try Again, Enter price before submitting")
        //   setSeverity('warning')
        // }

        if (errorList.length < 1) {

            accountApi.update(newData)
                .then(response => {
                    const updateHouse = [...user];
                    const index = oldData.tableData.id;
                    updateHouse[index] = newData;
                    setuser([...updateHouse]);
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


        accountApi.remove(oldData.userID)
            .then(response => {
                const dataDelete = [...user];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setuser([...dataDelete]);
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
    return (
        <>
            <MaterialTable
                title="User Table"
                columns={columns}
                data={user}
                icons={tableIcons}
                onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.contactID))}
                
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
                    cellStyle: {
                        width: 200,
                        maxWidth: 200,
                        // height:10,
                    },
                    headerStyle: {
                        fontSize: '1.5rem',
                        width: 200,
                        maxWidth: 200,
                        fontWeight: 'bold',
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
                        backgroundColor: (selectedRow === rowData.tableData.contactID) ? '#EEE' : '#FFF'
                    })
                }}
                
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

export default UserTable;