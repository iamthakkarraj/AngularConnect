import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../../../app/modules/user/objects/User'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private GetUrl(){
    return environment.baseUrl + 'User/';
  }

  GetAll(): Promise<User[]>{        
    return this.http.get<any>(this.GetUrl()).pipe(
      map(result => {
          return (result as User[]);
      })
    ).toPromise();
  }

  Get(id: number): Promise<User> {
    return this.http.get<any>(this.GetUrl()+id).pipe(
      map(result => {
          return result as User;
      })
    ).toPromise();
  }

  Post(user: any): any {
    return this.http.post<any>(this.GetUrl(),user).toPromise()
  }

  Put(user: any): any {
    return this.http.put<any>(this.GetUrl(),user).toPromise()
  }

  Delete(id: number) {
    return this.http.delete<any>(this.GetUrl()+id).toPromise();
  }

}