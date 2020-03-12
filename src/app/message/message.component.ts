import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() public message :string = '';  
  
  @Input('alert-pop') public message1 :string= ''  
  
  @Output() onSignup  = new EventEmitter<any>();  
  
  public name:string;
  public email:string;
  
  public showAlert():void{  
    alert(this.message1);  
  }
  public onSubmit() :void{  
    this.onSignup.emit({name: this.name, email: this.email});  
  }
}
