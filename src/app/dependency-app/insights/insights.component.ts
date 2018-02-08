import {  Component,  OnInit,  OnChanges,  Input,  Output,  EventEmitter,  ViewEncapsulation } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';

@Component({
  selector: 'insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.less']
})

export class InsightComponent implements OnInit {
  
  public package :string ;
  public version :string ;
  public security_issue :string ;
  public license_issue :string ;

  constructor() { }

  ngOnInit() {}

}
