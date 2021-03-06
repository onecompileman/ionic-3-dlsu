import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import { Student } from '../../models/students.model';

@IonicPage()
@Component({
  selector: 'page-create-student-modal',
  templateUrl: 'create-student-modal.html'
})
export class CreateStudentModalPage {
  hasError = false;
  student: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = new Student();
  }

  ionViewDidLoad() {}

  closeModal() {
    this.navCtrl.pop();
  }

  setGender(gender) {
    this.student.gender = gender;
  }

  addStudent() {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    this.student.id = students.length + 1;
    students.push(this.student);
    localStorage.setItem('students', JSON.stringify(students));
    this.navCtrl.pop();
  }
}
