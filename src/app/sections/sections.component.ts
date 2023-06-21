import { Component } from '@angular/core';
import {CollorChangeService} from "../collor-change.service";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {
    constructor(private service: CollorChangeService) {
    }
    getFirstColor(){
      return this.service.getColorSecionFirst();
    }

    getSecondColor(){
    return this.service.getColorSecionSecond();
    }

    getThirdColor(){
    return this.service.getColorSecionThird();
    }
}
