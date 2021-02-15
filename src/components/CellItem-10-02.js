import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./CellItem-10-02.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name, pic1, pic2, pic3) {
  return { name, pic1, pic2, pic3 };
}

const rows = [
  createData(
    "Row 1",
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />,
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />,
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />
  ),
  createData(
    "Row 2",
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />,
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />,
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />
  ),
  createData(
    "Row 3",
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />,
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />,
    <img
      className="image1"
      src="http://bit.ly/3ayPusa"
      alt="Image 1"
      width="100"
    />
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Image column 1</TableCell>
            <TableCell align="right">Image column 2</TableCell>
            <TableCell align="right">Image column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.pic1}</TableCell>
              <TableCell align="right">{row.pic2}</TableCell>
              <TableCell align="right">{row.pic3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
