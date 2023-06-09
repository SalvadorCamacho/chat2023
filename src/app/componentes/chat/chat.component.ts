import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Message } from 'src/app/mensajes';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  @ViewChild('area') foco: any;//para poner el foco
  public name: string = '';
  public mensaje: string = '';
  public msg: string = '';
  public room: any;
  public chat: any;
  public fecha: any;

  constructor(private navParams: NavParams,
    private modal: ModalController,
    private chatService: ChatService
    ) { }

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.chat = this.navParams.get('chat');
    //Consulta individual de chat
    this.chatService.getChat(this.chat.id)
    .subscribe(r  => {
       this.room = r;
    });
  }

  //Toma el foco el control llamado "foco"
  ngAfterViewChecked(): void {
      this.foco.setFocus();
  }

  //Cerrar ventana modal
  cerrarChat(){
    this.modal.dismiss();
  }

  sendMessage(){

    if(this.msg!==''){
      const nombreUsu = JSON.parse(
        localStorage.getItem('usuario')!);
      const m: Message = {
        content: this.msg,
        type: nombreUsu,
        date: new Date()
      };
     
      this.chatService.enviarABD(m, this.chat.id);
      this.msg = '';
    }else{
      this.foco.setFocus();
    }
  }

  convertir(d: any){
    this.fecha = d.toDate();
    return this.fecha.getDay() + '/' +
    this.fecha.getMonth() + '/' +
    this.fecha.getYear() + ' - ' +
    this.fecha.getHours() +
    ':' + this.fecha.getMinutes();
  }

}
