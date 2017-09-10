import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseionicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseionicProvider {

  constructor(public afd: AngularFireDatabase) { }

getContactList() {
    return this.afd.list('/contactList/');
}
 getBusinessData() {
   return this.afd.list('/businessData/');
 }

 addItem(name) {
   this.afd.list('/businessData/').push(name);
 }
 addSubItem(name) {
   this.afd.list('/businessaddr/').push(name);
 }

 removeItem(id) {
   this.afd.list('/businessData/').remove(id);
 }
}
