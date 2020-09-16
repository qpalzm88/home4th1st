import { Component } from '@angular/core';

export class Lesson{
  constructor(
 public number: number, 
 public date: Date, 
 public theme:string,
 public homework:string,
 public note: string)
  {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lesson: Lesson = new Lesson(1, new Date(), "Тема урока",  "Домашнее задание",  "Примечание");
  lessons:Lesson[]=[];

  addLesson(){
    this.lessons.push(new Lesson(this.lesson.number, this.lesson.date, this.lesson.theme, this.lesson.homework, this.lesson.note));
    this.lessons = JSON.parse(localStorage.getItem('lesson')).map((this.lesson));
  }
}