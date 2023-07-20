import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';


export const bookingGuard: CanDeactivateFn<BookingComponent> = (component: BookingComponent, currentRoute, currentState, nextState) => {
 
  // if (component.bookingForm.pristine) {
  //   return component.bookingForm.pristine;

  // } else {
  //   _snackbar: MatSnackBar
  //   _snackbar.open()
  //   _snackbar.open('You have unsaved changes!' , 'DISCARD')
  //   return false
  // }

  return true
 
};
