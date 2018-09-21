import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../models/students.model';

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html'
})
export class EditStudentPage {
  student: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = new Student();
  }

  ionViewDidLoad() {
    this.student = this.navParams.get('student');
  }

  setGender(gender) {
    this.student.gender = gender;
  }

  updateStudent() {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    students[
      students.findIndex(student => student.id == this.student.id)
    ] = this.student;
    localStorage.setItem('students', JSON.stringify(students));
    this.navCtrl.pop();
  }
}
