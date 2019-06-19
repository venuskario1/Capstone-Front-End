import { Component, OnInit, ViewChild } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { LessonModel } from '../models/lessonsModel';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  @ViewChild('lessonChild',{static: false}) lessonChild;

  lessons: any;

  newLesson: {}

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.getLessons().subscribe((data) => {
      console.log(data)
      this.lessons = data
      console.log("This is the lessons: ", this.lessons)
      
    });
  }



  submitLessons(type1,message) {
    let result = {type1:type1,message:message}
    this.lessonsService.submitLessons(result).subscribe(lessonData => console.log(lessonData))
  }
}
