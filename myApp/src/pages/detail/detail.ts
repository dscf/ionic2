import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  user = this.navParams.data;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  public alertCtrl: AlertController) {
  }

  dismiss() {
	  let alert = this.alertCtrl.create({
		title: 'Close this modal?',
		message: 'are you sure?',
		buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				handler: ()=>{
					console.log('clicked');
				}
			},
			{
				text: 'Yes',
				handler: ()=>{
					this.viewCtrl.dismiss();

				}
			}		
		]
	  });
	  alert.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
