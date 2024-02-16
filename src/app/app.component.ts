import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TF-bootcamp-testing-angular';

  public monAge: number = 25;

  constructor(private _form: FormBuilder){}

  public get name(): string{
    return 'Chuck Norris'
  }

  public updateAge():void{
    this.monAge = 35;
  }
}
