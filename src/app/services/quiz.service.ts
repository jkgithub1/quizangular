import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get() {
   return this.http.get("http://localhost:8080/quiz");
  }

  getAll() {
    return [
      { id: '', name: 'JavaScript' },
    ];
  }

}
