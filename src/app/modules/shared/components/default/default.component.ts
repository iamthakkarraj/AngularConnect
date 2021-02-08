import { Component, OnInit } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  loading = true

  constructor(private router: Router) {
    this.router.events.subscribe((e : RouterEvent) => {
       this.navigationInterceptor(e);
     })
  }

  ngOnInit(): void {
   
  }
  
  async delay(ms: number=400) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.loading = true;
    }

    if (event instanceof NavigationEnd) {
      this.delay().then(any=>{
        this.loading = false
      });
    }
    
    if (event instanceof NavigationCancel) {
      this.delay().then(any=>{
        this.loading = false
      });
    }

    if (event instanceof NavigationError) {
      this.delay().then(any=>{
        this.loading = false
      });
    }

  }

}
