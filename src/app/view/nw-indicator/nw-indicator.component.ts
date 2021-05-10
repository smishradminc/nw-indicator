import { Component, OnInit, Input } from '@angular/core';

export interface Indicator{
  status:string;
  count?:number | string;
}

@Component({
  selector: 'app-nw-indicator',
  templateUrl: './nw-indicator.component.html',
  styleUrls: ['./nw-indicator.component.scss']
})


export class NwIndicatorComponent  {
  @Input() indicatorType:Indicator = {status:'NA',count:0};
}
