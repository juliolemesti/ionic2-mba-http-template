import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestService } from '../../providers/test-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public service: TestService) {
  }

  callTestService(){
    this.service.testCall().subscribe((resp) => console.log(resp.json()));
  }

}
