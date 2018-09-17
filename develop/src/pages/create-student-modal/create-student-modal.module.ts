import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateStudentModalPage } from './create-student-modal';

@NgModule({
  declarations: [
    CreateStudentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateStudentModalPage),
  ],
})
export class CreateStudentModalPageModule {}
