import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import {PeopleProvider} from '../../providers/people/people'
import {DetailPage} from '../detail/detail'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  people = [];
  constructor(public navCtrl: NavController, public service: PeopleProvider,
  public modalCtrl: ModalController) {
	this.service.getPeople().subscribe(data=>this.people = data.results)
  }
  
  shouldReorder = false;
  
  doRefresh(e) {
    this.service.getPeople()
	.subscribe(
	  data => this.people.unshift(...data.results),
	  err => console.log(err),
	  () => e.complete()
	)
  }
  
  doInfinite(e) {
    this.service.getPeople()
	.subscribe(
	  data => this.people.push(...data.results),
	  err => console.log(err),
	  () => e.complete()
	)
  }
  
  toggleReorder() {
    this.shouldReorder = !this.shouldReorder;
  }
  
  pushPage(user) {
	this.modalCtrl.create(DetailPage, user).present();
  //  this.navCtrl.push(DetailPage, user);
  }

}
