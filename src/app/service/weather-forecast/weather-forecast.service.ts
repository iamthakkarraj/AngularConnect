import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WeatherForecast } from '../../../app/modules/user/objects/WeatherForecast'

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private httpClient : HttpClient){}  

  Get(): any {
    return this.httpClient.get<WeatherForecast>(this.GetURL());      
  }

  private GetURL(){
    return environment.baseUrl + 'WeatherForecast';
  }

}