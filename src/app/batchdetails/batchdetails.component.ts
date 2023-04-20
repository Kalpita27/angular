import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent {

  public Batches = [
    {"Name":"PPA", "Fees":18000, "Duration":"3.5month"},
    {"Name":"LB", "Fees":18200, "Duration":"3month"},
    {"Name":"Angular", "Fees":18500, "Duration":"4month"},
  ];


}
