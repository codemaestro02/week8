import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private toastr: ToastrService) {}

  onButtonClick(buttonName: string) {
    this.toastr.info(`${buttonName} is clicked`);
  }
}
