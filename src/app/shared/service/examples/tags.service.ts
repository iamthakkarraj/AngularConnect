import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../../objects/class/AppConstants';
import { environment } from '../../../../environments/environment';
import { removeSummaryDuplicates } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { Tag } from '../../objects/class/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {  

  constructor(private http: HttpClient) { }

  private GetUrl(){
    return environment.DummyApiBasePath + environment.DummyApiTagPath + AppConstants.TagListLimit;
  }

  private GetHeader(){
    return {
      headers: new HttpHeaders({      
        'app-id': environment.ApiTokenForDummyApiIO
      })
    };
  }

  GetAll(){        
    return this.http.get<any>(this.GetUrl(), this.GetHeader()).pipe(
      map(result => {
          return (result.data as string[]).map( x =>{
            return new Tag(x);
          });
      })
    );
  }

}
