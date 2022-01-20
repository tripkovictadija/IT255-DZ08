import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { Room } from '../../modules/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() room: Room;

  @Output() obrisiEvent: EventEmitter<Room>;
  @Output() izmeniEvent: EventEmitter<Room>;

  public konacnaCena: number;

  constructor( private rs: RoomServiceService) {
    this.room = new Room("123", "Naziv", 4, 5, 2)
    this.obrisiEvent = new EventEmitter<Room>();
    this.izmeniEvent = new EventEmitter<Room>();
  }

  ngOnInit() {
  }


  public obrisi() {
    this.obrisiEvent.emit(this.room);  
  }
  public izmeni() {
    this.izmeniEvent.emit(this.room);
  }
  public cena() {
    this.konacnaCena = this.room.brNoci * this.room.price;
    return this.rs.getPrice(this.konacnaCena);
  };
}