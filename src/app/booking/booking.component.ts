import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  bookingForm!: FormGroup

  get guests() { return this.bookingForm.get('guests') as FormArray }

  constructor(private configService: ConfigService, private fb: FormBuilder,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }, { validators: [Validators.required] }),                                  //new FormControl('')
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', { updateOn: 'blur' }],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required] }],
        addressLine2: [''],
        city: ['', { validators: [Validators.required] }],
        state: ['', { validators: [Validators.required] }],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] })
    }, {updateOn: 'blur', Validators: [CustomValidator.ValidateDate]})

    this.getBookingData()
    // this.bookingForm.valueChanges.subscribe((data) => {
    //  this.bookingService.bookRoom(data).subscribe((data) => {})
    // })

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data))

  }

  addBooking() {
    console.log(this.bookingForm.getRawValue())
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => { console.log(data) })
    this.bookingForm.reset(
      {
        roomId: '2',                                  //new FormControl('')
        guestEmail: '',
        checkinDate: '',
        checkoutDate: '',
        bookingStatus: '',
        bookingAmount: '',
        bookingDate: '',
        mobileNumber: '',
        guestName: '',
        address: {
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          country: '',
          zipCode: '',
        },
        guests: [],
        tnc: false
      }
    )

  }

  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '2',                                  //new FormControl('')
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-Feb-2020'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false

    })
  }

  addGuest() {
    this.guests.push(this.addGuestControl())

  }

  addGuestControl() {
    return this.fb.group({ guestName: ['', { validators: [Validators.required] }], age: new FormControl('') })
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''))
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport')
    }

  }

  removeGuest(i: number) {
    this.guests.removeAt(i)
  }


}
