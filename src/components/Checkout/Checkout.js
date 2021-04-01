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

    return (
        <div>
            <h1>This Is Checkout</h1>
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
      <Button onClick={handleOrder} variant="contained" color="primary"> Book Now </Button>
    </MuiPickersUtilsProvider>
        </div>
    );
};

export default Checkout;