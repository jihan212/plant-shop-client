import 'date-fns';
import React, { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Order from '../Order/Order';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData('Product', 100),
  createData('Total', 100),
];



const Checkout = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({ checkOut : new Date() });
    const [product, setProduct] = useState([]);

    const {id} = useParams();
    useEffect((id) => {
      fetch=`http://localhost:2000/products/${id}`
      .then (res => res.json())
      .then (data => setProduct(data))
    },[id]);

    const handleCheckOut = (date) => {
        const newDates = {...selectedDate}
        newDates.checkOut = date;
        setSelectedDate(newDates);
    } 

    const handleOrder = () => {
      const newOrder = {...loggedinUser, ...selectedDate};
      fetch('https://secure-brook-07656.herokuapp.com/addOrder', {
        method : 'POST',
        headers : { 'content-type': 'application/json' },
        body : JSON.stringify(newOrder)
      })
      .then (res => res.json())
      .then (data => {
        console.log(data);
      })
    }

    const classes = useStyles();


    return (
        <div>
          <p>Loggedin User: {loggedinUser.name}</p>
          
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                 id="date-picker-dialog"
                  label="Check Out"
                  format="dd/MM/yyyy"
                  value={selectedDate.checkOut}
                  onChange={handleCheckOut}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                 />
              </Grid>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                     {row.name}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
                ))}
                </TableBody>
                </Table>
              </TableContainer>
              <Button onClick={handleOrder} variant="contained" color="primary"> Check Out </Button>
              </MuiPickersUtilsProvider>
              <Order></Order>
        </div>
    );
};

export default Checkout;