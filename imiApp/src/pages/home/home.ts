
import { FirebaseionicProvider } from './../../providers/firebaseionic/firebaseionic';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  contactList: FirebaseListObservable<any>;
  contact = {
    name: '',
    id: '',
    address: '',
    phone: '',
    city: ''
  };
  //constructor(public navCtrl: NavController, public firebaseionicProvider: FirebaseionicProvider)
    constructor(public navCtrl: NavController, public af: AngularFireDatabase, public params: NavParams){
    this.contactList = af.list('/contacts');
    this.contact.id = this.params.get('key');
    this.contact.name = this.params.get('name');
    this.contact.address = this.params.get('address');
    this.contact.phone = this.params.get('phone');
    this.contact.city = this.params.get('city');

  }
  addContact(id, name, address, phone, city) {
    if(id) {
      this.contactList.update(id, {
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.contactList.push({
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newContact => {
        //this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }

}
  /*constructor(public navCtrl: NavController, public firebaseionicProvider: FirebaseionicProvider) {
    this.businessData = this.firebaseionicProvider.getBusinessData();
  }

  addItem() {
    this.firebaseionicProvider.addItem(this.businessName);

  }

  removeItem(id) {
    this.firebaseionicProvider.removeItem(id);
  }
}*/
