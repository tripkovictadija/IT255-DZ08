import { Component, OnInit } from '@angular/core';
import { Room } from './modules/Room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MetHotels';

  rooms: Room[];
  userPrice: string = "";
  
  constructor() {    
    this.rooms = [
      new Room("5a", "M-Vozdovac", 4, 260, 2),
      new Room("6b", "Kula-Trstenik", 3, 160, 1),
      new Room("7c", "Golf-Krusevac", 2, 60, 5),
    ];
  }

  ngOnInit(): void {
      
  }

 /* addRoom(roomNumber: HTMLInputElement, naziv: HTMLInputElement, brOsoba: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding room, room number: ${roomNumber.value} and name: ${naziv.value}`);
    this.rooms.push(new Room(roomNumber.value, naziv.value, Number(brOsoba.value), Number(price.value)));
    roomNumber.value = '';
    naziv.value = '';
    brOsoba.value = '';
    price.value = '';
    return false;
  }*/

  shuffle(array: Room[]): boolean {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return false;
  }
  trackByFn(customParam: any, index: any, item: any) {
    return item[customParam];
  }

  search() {

    if (this.userPrice != "") {
      this.rooms = this.rooms.filter(res => {
        return res.price.toString().toLocaleLowerCase().match(this.userPrice.toLocaleLowerCase());
      })

    } else {
      this.ngOnInit();

    }
  }

  public obrisiSobu(room: Room) {
    this.rooms = this.rooms.filter(item => {
      return item.roomNumber !== room.roomNumber
    })
  }

  public izmeniSobu(room: Room) {
    let index = this.rooms.findIndex(i => i.roomNumber === room.roomNumber);
    this.rooms[index].name = "Drugo ime";
   // this.rooms[index].roomNumber = "Drugi broj"
    this.rooms[index].brOsoba = 10
    this.rooms[index].price = 1000
  }

  public addRoom(room: Room) {
    console.log("radi add");
    this.rooms.push(room);
  }

}

