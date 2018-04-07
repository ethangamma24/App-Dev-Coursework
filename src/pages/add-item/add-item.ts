import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  itemName;
  price;
  description;
  category;
  url;
  quantity=1;
  image: string;

  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data, private camera: Camera) {

  }

  saveItem() {
  // this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity );
    var Menu = Parse.Object.extend("Menu");
    var menu = new Menu();
    var name = "photo.png";

    var parseFile = new Parse.File(name, this.image);
    parseFile.save({
      success: function(file) {
        alert('File Saved! Now saving item to Parse...');

        menu.set("name", this.itemName);
        menu.set("price", parseFloat(this.price));
        menu.set("category", this.category);
        menu.set("photo", parseFile);
        menu.set("description", this.description)

        menu.save(null, {
          success: function(menu) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + menu.id);
          },
          error: function(menu, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
          }
        });
        this.view.dismiss();
      }
      error: function(menu, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to save picture');
      }
    });




  }

  close() {
    this.view.dismiss();
  }

  takePicture() {
    console.log("Entered Successfully");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      //this.displayErrorAlert(err);
      console.log(err);
    });
  }

}
