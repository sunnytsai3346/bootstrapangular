import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('helloModal') helloEl?:ElementRef;
  modal?:bootstrap.Modal;

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal(this.helloEl?.nativeElement,{});
  }
  trigger(){
    this.modal?.toggle();
  }
  title = 'bootstrapangulartutorial';
}
