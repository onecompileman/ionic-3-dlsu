import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateStudentModalPage } from '../pages/create-student-modal/create-student-modal';
import { LoginPage } from '../pages/login/login';
import { EditStudentPage } from '../pages/edit-student/edit-student';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateStudentModalPage,
    LoginPage,
    EditStudentPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateStudentModalPage,
    LoginPage,
    EditStudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
