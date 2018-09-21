import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  ActionSheetController
} from 'ionic-angular';
import { CreateStudentModalPage } from '../create-student-modal/create-student-modal';
import { LoginPage } from '../login/login';
import { EditStudentPage } from '../edit-student/edit-student';
import { Student } from '../../models/students.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  students: Student[] = [];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ionViewDidEnter() {
    this.students = <Student[]>(
      JSON.parse(localStorage.getItem('students') || '[]')
    );
  }

  addStudent() {
    this.navCtrl.push(CreateStudentModalPage);
  }

  logout() {
    const confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure, you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Logout',
          handler: () => {
            localStorage.removeItem('isLogin');
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  onStudentClicked(student) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Choose your action',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            const confirm = this.alertCtrl.create({
              title: 'Delete',
              message: 'Are you sure, you want to delete this shit?',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel'
                },
                {
                  text: 'Delete',
                  handler: () => {
                    const students = JSON.parse(
                      localStorage.getItem('students')
                    );
                    students.splice(students.indexOf(student), 1);
                    this.students = students;
                    localStorage.setItem('students', JSON.stringify(students));
                  }
                }
              ]
            });
            confirm.present();
          }
        },
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditStudentPage, { student });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
}
