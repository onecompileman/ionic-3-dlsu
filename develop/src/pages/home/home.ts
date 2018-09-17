import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CreateStudentModalPage } from '../create-student-modal/create-student-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: string[] = ['Stephen'];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  addStudent() {
    const modal = this.modalCtrl.create(CreateStudentModalPage);
    modal.present();
  }

}
