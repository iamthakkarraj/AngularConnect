import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/user/objects/User';
import { WeatherForecast } from '../../modules/user/objects/WeatherForecast';
import { UserService } from '../../service/user/user.service';
import { WeatherForecastService } from '../../service/weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService : UserService,
    private weatherForecastService : WeatherForecastService
    ) { }

  userCount: number=0;
  users : User[] = [];

  weatherForecast: WeatherForecast[] = [];

  async ngOnInit(): Promise<void> {
    
    this.users = await this.userService.GetAll();

    this.userCount = this.users.length;
        
    this.weatherForecastService.Get().subscribe(data=> {
      this.weatherForecast = data;
    })

  }

}