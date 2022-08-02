import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fsample',
  templateUrl: './fsample.component.html',
  styleUrls: ['./fsample.component.css']
})
export class FsampleComponent {

  email = new FormControl('abc@gmail.com', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);

  username = false;
  // fg = new FormGroup({
  //   userEmail: new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
  //   userPass: new FormControl('password', [Validators.required])
  // });

  fg: FormGroup
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      userEmail: this.fb.control('abc@gmail.com', [Validators.required]),
      userPass: ['', [Validators.required]],
      mobile: this.fb.array([]),
      address: this.fb.array([])
    })

    this.email.valueChanges.subscribe(data => {
      console.log(data);
    });
    this.fg.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }
  emailValid() {
    console.log("errors ", this.email.errors);
    console.log("valid", this.email.valid);
  }
  addField() {
    this.username = true;
    this.fg.addControl('userName', new FormControl('', [Validators.required]))
  }
  removeField() {
    this.username = false;
    this.fg.removeControl('userName')
  }
  submitBtn() {
    console.log('value ', this.fg.value);
    console.log('valid ', this.fg.valid);
  }
  get mobileM() {
    return this.fg.get('mobile') as FormArray
  }
  addMobile() {
    const mobile1 = this.fb.control('123456789', [Validators.required]);
    this.mobileM.push(mobile1);
    console.log(this.mobileM.controls);
  }
  get addressA(){
    return this.fg.get('address') as FormArray
  }
  addAddress(){
    const address1 = this.fb.group({
      doorNo:['',Validators.required],
      street:['', Validators.required]
    });
    this.addressA.push(address1);
    console.log(this.addressA.controls);
  }
  removeAdd(index:number){
    this.addressA.removeAt(index);
  }
}
