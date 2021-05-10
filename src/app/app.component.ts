import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  indicatorData:any[]=[
  {status:'due',count:'2'},
  {status:'submitted'},
  {status:'paid',count:2},
  {status:'refund'}
]
  title = 'nw-indicator';
}
