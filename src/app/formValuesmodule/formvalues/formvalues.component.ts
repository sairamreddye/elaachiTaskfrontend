import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formvalues',
  templateUrl: './formvalues.component.html',
  styleUrls: ['./formvalues.component.css']
})
export class FormvaluesComponent implements OnInit {
  @Input() userValues: any;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userValues); //here you will get the values of user registered in the form that comes with @input form values.
  }

}
