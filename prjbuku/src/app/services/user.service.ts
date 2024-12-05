import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "https://apisi51.vercel.app/users/";
  private subjectExecuteUser = new Subject<string>();

  constructor(public http: HttpClient) { }

  // observealbe subject
  executeUserListener() {
    return this.subjectExecuteUser.asObservable();
  }

  addUser(email: string, password: string) {
    const user: User = {
      _id: null,
      email: email,
      password: password
    };

    this.http.post<{ message: string }>(this.url, user)
      .subscribe(
        (response) => {
          console.log(response);
          this.subjectExecuteUser.next(response.message);
        },
        (error) => {
          console.log(error);
          this.subjectExecuteUser.next(error.error.message);
        }
      );
  }

}
