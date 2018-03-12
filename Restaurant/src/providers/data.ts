import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events } from 'ionic-angular';


@Injectable()
export class Data {
private parseAppId: string = 'KL0q2WV3JBc805lcwMQwE2dGctmcDbF2Lj1eyTED';
private parseJSKey: string='45osJ5IaYEvsPZA7Y3lfDcGgm8Ofzr25pAExN0bS'
private parseServerUrl: string = 'https://parseapi.back4app.com/';


  constructor(public Storage: Storage,public events:Events){

    Parse.initialize(this.parseAppId, this.parseJSKey);
    Parse.serverURL = this.parseServerUrl;

     console.log('Initiated Parse');

    const Menu = Parse.Object.extend('Menu');
    let query = new Parse.Query(Menu);
    console.log(query);
    query.limit(1000);
    query.find().then((menus) => {
      // resolve(menus);
      console.log(menus.length)
    }, (error) => {
      //reject(error);
    });




  }

  setMenuItem(itemName, price, description, category, url, quantity){

//   	let item={
//   	itemName : itemName,
// 	price: price,
//     description: description,
//     category: category,
//     url: url,
//     quantity: quantity= 1,
// };

	// this.saveMenuItem(item);

  }




  getDataMenu() {
    //return this.Storage.get('items');
    // return this.items;
    const Menu = Parse.Object.extend('Menu');
    let query = new Parse.Query(Menu);
    query.limit(1000);
    var items=[];
    query.find().then((menus) => {
      // resolve(menus);
      console.log(menus.length);

      for (var i = menus.length - 1; i >= 0; i--) {
         var mymenu = {
           itemName:menus[i].get("name"),
           price:menus[i].get("price"),
           category:menus[i].get("category"),
           url:menus[i].get("photoUrl"),
           id:menus[i].id
         }
         items.push(mymenu);
      }
      console.log(items.length);
      return items;

    }, (error) => {
      // reject(error);
      console.log("error");
    });

    return items;

  }

  saveMenuItem(item){
  	// this.items.push(item);
   //  let newData = JSON.stringify(item);
   //  this.Storage.set('items', newData);
  }

setOrderItem(itemName, price, description, category, url, quantity, myDate,menuid){

    let order={
        itemName : itemName,
        price: price,
        description: description,
        category: category,
        url: url,
        quantity: quantity,
        myDate: myDate,
        menuid: menuid
    };

  this.saveOrderItem(order);

  }


  getDataOrder() {
    //return this.Storage.get('items');
    // return this.orders;
    const Order = Parse.Object.extend('Order');
    let query = new Parse.Query(Order);
    query.limit(1000);
    query.include("menu");
    var items=[];
    query.find().then((orders) => {
      // resolve(orders);
      console.log(orders.length);

      for (var i = orders.length - 1; i >= 0; i--) {
         var mymenu = {
           itemName:orders[i].get("menu").get("name"),
           price:orders[i].get("menu").get("price"),
           quantity:orders[i].get("itemqty"),
           url:orders[i].get("menu").get("photoUrl"),
           description:orders[i].get("menu").get("description"),
           id:orders[i].get("menu").get("objectId"),
           date:new Date()
         }
         items.push(mymenu);
      }
      console.log(items.length);
      return items;

    }, (error) => {
      // reject(error);
      console.log("error");
    });

    return items;


  }

  saveOrderItem(order){
    // this.orders.push(order);
    // let newData = JSON.stringify(order);
    // this.Storage.set('orders', newData);

    var Order = Parse.Object.extend("Order");
    var o = new Order();
    console.log(order.price);
    console.log(order.quantity);

    o.set("totalamount", order.price*order.quantity);
    o.set("itemqty", parseFloat(order.quantity));

    const Menu = Parse.Object.extend('Menu');
    var menu= new Menu();
    menu.id = order.menuid;
    o.set("menu",menu);

    var self=this;
    o.save(null, {
      success: function(myorder) {
        // Execute any logic that should take place after the object is saved.
        console.log('New order created with objectId: ' + myorder.id);

        let newOrder = {
          name:order.name,
          quantity:order.quantity
        };

        // this.view.dismiss(newItem);
        self.events.publish("neworder", newOrder);

      },
      error: function(menu, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });



  }







}
