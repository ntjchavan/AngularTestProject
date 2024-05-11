import { Component } from '@angular/core';
import { SharedatataService } from 'src/app/services/sharedatata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private data: SharedatataService){}
}
