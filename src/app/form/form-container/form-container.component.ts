import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  // move to RxJs 
  firstName: String = '';
  lastName: String = '';
  dateOfBirth: String = '';
  framework: String = '';
  frameworkVersion: String = '';
  email: String = '';
  hobby: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
