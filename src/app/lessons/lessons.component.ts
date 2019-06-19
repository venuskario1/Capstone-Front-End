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

  lessons: LessonModel[];

  newLesson: {}

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.getLessons().subscribe((data) => {
      this.lessons = data as LessonModel[];
      this.lessons = this.lessons.slice(1,6);
    })
  }

  submitLesson() {
    this.lessonsService.submitLessons(this.newLesson)
  }

}
