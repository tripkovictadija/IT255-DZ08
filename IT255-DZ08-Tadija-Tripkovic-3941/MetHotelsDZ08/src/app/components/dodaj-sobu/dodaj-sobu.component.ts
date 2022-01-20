import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Room } from 'src/app/modules/Room';


function validator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]*$/)) {
   return { invalidForm: true };
 } else {
   return { invalidForm: false };
 }
}

@Component({
  selector: 'app-dodaj-sobu',
  templateUrl: './dodaj-sobu.component.html',
  styleUrls: ['./dodaj-sobu.component.css']
})



export class DodajSobuComponent implements OnInit {

  public roomForm!: FormGroup;
  @Output() dodatiSobu: EventEmitter<Room>;
  // @Input() abstractcontrol!: AbstractControl;
 // @Input() room!: Room;

  absControll!: AbstractControl;

  constructor(formbuilder: FormBuilder) { 

    this.dodatiSobu = new EventEmitter();

  }

  

  ngOnInit() {
    this.initForm();
    this.absControll = this.roomForm.controls['price'];
    this.absControll = this.roomForm.controls['brOsoba'];
  }

  public initForm() {
    this.roomForm = new FormGroup({
      roomNumber: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      brOsoba: new FormControl('', [
        Validators.required, validator
      ]),
      price: new FormControl('', [
        Validators.required, validator
      ]),
      brNoci: new FormControl('', [
        Validators.required
      ])
    });
  }

  osluskivac(event: string) {
    if (event.length < 6)
      console.log("Uneseno je manje od 6 karaktera.");
  }

  public submitForm() {
  //  console.log("radi forma1");
    let roomNumber = this.roomForm.get('roomNumber')!.value;
  //  console.log(roomNumber); //radi??
    let name = this.roomForm.get('name')!.value;
   // console.log(name); //radi???
    let brOsoba = this.roomForm.get('brOsoba')!.value;
  //  console.log(brOsoba); //radi
    let price = this.roomForm.get('price')!.value;
   // console.log(price); //ne radi!!
   let brNoci = this.roomForm.get('brNoci')!.value;

    let room = new Room(roomNumber, name, brOsoba, price, brNoci);
    
    console.log("radi forma");
    this.dodatiSobu.emit(room);
  }


  

}
