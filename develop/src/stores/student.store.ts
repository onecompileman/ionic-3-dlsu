import { Injectable } from "@angular/core";
import { Student } from "../models/students.model";

@Injectable()
export class StudentStore {
    
    students: Student[] = [];
    
    constructor() {
        const students = sessionStorage.getItem('students');
        if (students === null) {
            sessionStorage.setItem('students', JSON.stringify([]));
        } else {
            this.students = JSON.parse(students);
        }
    }

}