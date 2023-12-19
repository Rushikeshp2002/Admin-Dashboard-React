import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.css';

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Casual Shirt", 13764013, "2 Dec 2023","Approved"),
    createData("Formal Trouser", 92618468, "2 Dec 2023","Pending"),
    createData("SweatShirt",73865927, "1 Dec 2023","Approved"),
    createData("Grey Thermal",49164728, "28 Nov 2023","Delivered"),
   
];

const makeStyles=(status)=>{
    if(status === "Approved"){
        return{
            background:'rgba(145 254 159 / 47%',
            color:'green',
            borderRadius: '0.2rem',
            padding: '5px',

    }
    }else if(status === "Pending"){
        return{
            background:'#ffadad8f',
            color:'red',
            borderRadius: '0.2rem',
            padding: '5px',
        }

    }else{
        return{
            background:'#59bfff',
            color:'white',
            borderRadius: '0.2rem',
            padding: '5px',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer component={Paper}
            style={{
                boxShadow:'0px 13px 20px 0px #80808029',
                borderRadius:'0.7rem',
                padding: '1px'
            }}
            >
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyles(row.status)}>
                                        {row.status}

                                    </span>
                                </TableCell>
                                <TableCell align="left" className="details">Detail</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
