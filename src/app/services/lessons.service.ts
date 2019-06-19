import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getLessons() {
    return this.http.get('http://127.0.0.1:5000/lessons')
  }

  submitLessons(lessons) {
    console.log(lessons)
    return this.http.post('http://127.0.0.1:5000/lessons',lessons)
  }
}
