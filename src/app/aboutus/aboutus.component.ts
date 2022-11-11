import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  peopleData:any;
  constructor(people:PersonnelService) { 
    this.peopleData = people.Personnel_list
  }

  ngOnInit(): void {
  }
  getData(){
    return this.peopleData
  }

}
