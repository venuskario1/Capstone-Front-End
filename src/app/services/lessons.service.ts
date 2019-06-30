import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getLessons() {
    return this.http.get('https://music-store-back-end.herokuapp.com/lessons')
  }

  submitLessons(lessons) {
    console.log(lessons)
    return this.http.post('https://music-store-back-end.herokuapp.com/lessons',lessons)
  }
}
