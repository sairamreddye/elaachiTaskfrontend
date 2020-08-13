import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user_operations/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userValues: any = [];
  constructor(private formBuilder: FormBuilder, private UserService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.userValues = [];
    this.submitted = true
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.userValues.push(this.registerForm.value);
    this.UserService.postUserData(this.registerForm.value).subscribe((response: any) => {
      console.log(response),
        (err) => console.log(err)
    })
  }
  reset() {
    this.registerForm.reset();
  }

}
