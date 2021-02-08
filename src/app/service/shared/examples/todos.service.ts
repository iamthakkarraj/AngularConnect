import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Todo } from '../../../modules/shared/objects/class/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {  

  constructor(private http: HttpClient) { }

  private GetUrl(){
    return environment.dummyApiBasePath + environment.dummyApiTodoPath;
  }

  GetAll(){        
    return this.http.get<any>(this.GetUrl()).pipe(
      map(result => {
          return (result as Todo[]).map( x =>{
            return new Todo(x.title);
          });
      })
    );
  }

}
