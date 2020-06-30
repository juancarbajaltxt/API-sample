import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openweather';
  
  houston_data;
  la_data;

  // our HttpClient Object that is constructed here is called http 
  constructor(public http: HttpClient){
    // los angeles
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((la_data) => {
      console.log(la_data, "x");
      this.la_data = la_data;
    }, (err) => {console.log(err);
    })

    //houston
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=4699066&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((houston_data) => {
      console.log(houston_data);
      this.houston_data = houston_data;
    }, (err) => {console.log(err);
    })
  }


}
