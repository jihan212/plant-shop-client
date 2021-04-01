import 'date-fns';
import React, { useContext, useState } from 'react';
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



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, quantity, price) {
  return { name, quantity, price };
}

const rows = [
  createData('Product', 1, 100),
  createData('Total', 1, 100),
];



const Checkout = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn : new Date(),
        checkOut : new Date()
    });

    const handleCheckIn = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleCheckOut = (date) => {
        const newDates = {...selectedDate}
        newDates.checkOut = date;
        setSelectedDate(newDates);
    } 

    const handleOrder = () => {

    }

    const classes = useStyles();


    return (
        <div>
          
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Check In"
          value={selectedDate.checkIn}
          onChange={handleCheckIn}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Check Out"
          format="dd/MM/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOut}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Button onClick={handleOrder} variant="contained" color="primary"> Check Out </Button>
    </MuiPickersUtilsProvider>
        </div>
    );
};

export default Checkout;