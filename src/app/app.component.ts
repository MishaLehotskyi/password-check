import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CollorChangeService} from "./collor-change.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollorChangeService]
})
export class AppComponent implements OnInit{
  form: FormGroup;

  constructor(private service: CollorChangeService) {
  }
  ngOnInit(): void {
     this.form = new FormGroup({
      'password': new FormControl(null)
     })

    this.form.get('password').valueChanges.subscribe((value) => (this.service.checkPasswordStrength(value)));
  }

}
