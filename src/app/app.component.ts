import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AppPipe } from './app.pipe';
import { AppService } from './app.service'

export class Lesson {
  constructor(
    public id: number,
    public number: number,
    public date: string,
    public theme: string,
    public homework: string,
    public note: string) { }
}

export class Rait {
  constructor(
    public idLesson: number,
    public raiting: number
  ) { }
}

export class Student {
  public fio: string;
  public rait: Array<Rait> = [];
  public raiting: number;
  public avrg: number;

  constructor(value: string) {
    this.fio = value
  }

  setFio(value: string) {
    this.fio = value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // lesson: Lesson = new Lesson(0, 1, new Date(), "Тема урока", "Домашнее задание", "Примечание");
  lessons: Lesson[] = [];
  students: Student[] = [new Student("Иванов"), new Student("Петров"), new Student("Сидоров")];
  raitinggs: number[] = [1, 2, 3, 4, 5];

  myForm: FormGroup;
  now: Date = new Date();

  constructor(public serv: AppService, public datePipe: DatePipe, public myPipe: AppPipe) {
    this.myForm = new FormGroup({
      "number": new FormControl("", [Validators.required]),
      "date": new FormControl("", [Validators.required, this.customValidation]),
      "theme": new FormControl("", [Validators.required]),
      "homework": new FormControl("", [Validators.required]),
      "note": new FormControl("", [Validators.required]),
      
    })
    console.log(datePipe.transform(this.now, "dd.MM.yyyy hh:mm:ss" ));

  }

  addLesson() {
    console.log(this.myForm);
    var dat =this.myPipe.transform(this.myForm.controls["date"].value, "-", ".");
    var lesson = new Lesson(
      this.lessons.length,
      this.myForm.controls["number"].value,
      dat,
      this.myForm.controls["theme"].value,
      this.myForm.controls["homework"].value,
      this.myForm.controls["note"].value);
    console.log(lesson);
    this.lessons.push(lesson);
  }

  customValidation(control: FormControl): ValidationErrors | null {
    return null;
  }
}
