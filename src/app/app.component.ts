import { Component } from '@angular/core';

export class Lesson {
  constructor(
    public number: number,
    public date: Date,
    public theme: string,
    public homework: string,
    public note: string) { }
}

export class Student {
  public fio: string;
  public rait: Array<number> = [];
  public raiting: number;
  public avrg: number;

  constructor(value: string) {
    this.fio = value
  }

  setFio(value: string) {
    this.fio = value;
  }

  addRait(r: number) {
    this.rait.push(r);
  }


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lesson: Lesson = new Lesson(1, new Date(), "Тема урока", "Домашнее задание", "Примечание");
  lessons: Lesson[] = [];
  students: Student[] = [new Student("Иванов"), new Student("Петров"), new Student("Сидоров")];
  raitinggs: number[] = [1, 2, 3, 4, 5];

  addLesson() {
    var lesson = new Lesson(this.lesson.number, this.lesson.date, this.lesson.theme, this.lesson.homework, this.lesson.note);
    this.lessons.push(lesson);
    this.lessons = JSON.parse(localStorage.getItem('lesson')).map((this.lesson));
  }

  addRait(ra: number, student: Student) {
    student.addRait(ra);
    let i: number = 0;
    for (let index = 0; index < student.rait.length; index++) {
      let r: number = student.rait[index];
      i = i*1 + r*1;
    }
    student.raiting =Math.floor(i / student.rait.length * 100) / 100;
    student.avrg = Math.round(i / student.rait.length);
  }
}