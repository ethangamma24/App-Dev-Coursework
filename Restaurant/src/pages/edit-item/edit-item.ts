import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';


@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html'
})
export class EditItemPage {

  itemName;
  price;
  description;
  category;
  url;
  quantity;
  myDate;
  menuid;
  item;
  Menu;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data ) {

  }

  ionViewDidLoad() {
    this.itemName = this.navParams.get('item').itemName;
    this.price = this.navParams.get('item').price;
    this.category = this.navParams.get('item').category;
    this.url = this.navParams.get('item').url;
    this.description = this.navParams.get('item').description;
    this.quantity = this.navParams.get('item').quantity;
    this.menuid = this.navParams.get('item').id;
    this.item = this.navParams.get('item');
    this.Menu = Parse.Object.extend("Menu");
  }

  saveItem() {
    //console.log(this.menuid);
    var Menu = Parse.Object.extend("Menu");
    var query = new Parse.Query(Menu);
    query.include('objectId');
    query.equalTo('objectId', this.menuid);
    //console.log(query);
    query.find({
        success: function (menu) {
                console.log("sucessfully called");
                console.log("why isnt this working");
                //console.log('Menu found with name: ' + menu.get("name") + ' and price: ' + menu.get("price"));
                console.log("What aboutthis one");
                console.log(menu);
                return menu;
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    }).then(
      function(menu) {
        console.log("entered function");
        console.log(menu);
        console.log("setting values...")
        console.log(menu.clear());
        console.log(menu);
        console.log("menu cleared");
        menu.set('name', this.itemName);
        console.log("name was set");
        menu.set('price', this.price);
        menu.set('category', this.category);
        menu.set('photoUrl', this.url);
        menu.set('description', this.description);
        console.log("saved all edits");

        menu.save(null, {
            success: function (menu) {
                console.log('Menu updated! Name: ' + menu.get("name") + ' and new price: ' + menu.get("price"));
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
      }
    );
    this.view.dismiss();
  }

  close() {
    this.view.dismiss();
  }

}
