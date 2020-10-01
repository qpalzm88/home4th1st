import { Injectable } from '@angular/core';
import { Lesson, Rait, Student } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  addRait(ra: number, student: Student, lesson: Lesson) {
    var idLesson = lesson.id;
    var newRait = true;
    let i: number = 0;
    for (let index = 0; index < student.rait.length; index++) {
      var r = student.rait[index];
      if (r.idLesson == idLesson) {
        newRait = false;
        r.raiting = ra;
      }
      i = i * 1 + r.raiting * 1;
    }
    if (newRait) {
      student.rait.push(new Rait(idLesson, ra));
      i = i * 1 + ra * 1;
    }
    student.raiting = Math.floor(i / student.rait.length * 100) / 100;
    student.avrg = Math.round(i / student.rait.length);
  }

  convertDate(value: String): string {
    var strs = value.split("-", 3);
    return strs[2] + "." + strs[1] + "." + strs[0];
  }


}
