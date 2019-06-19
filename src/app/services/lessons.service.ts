import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getLessons() {
    return this.http.get('   ')
  }

  submitLessons(lesson) {
    console.log(lesson);
    return this.http.post(' ')
  }
}
