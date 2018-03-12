import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { EditItemPage } from '../edit-item/edit-item';
import { ItemDetailPage } from '../item-detail/item-detail';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

	items =[];


  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  	  this.items = this.dataService.getDataMenu();
      console.log(this.items.length);
      console.log("get it");
  }


  ionViewDidLoad() {

  }

  addItem(){
  	this.navCtrl.push(AddItemPage);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  editItem(item) {
    this.navCtrl.push(EditItemPage, {
      item: item
    });
  }

  deleteItem(item) {

  }

}
