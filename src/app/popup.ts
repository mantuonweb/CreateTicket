import { Directive,ElementRef,Input } from '@angular/core';
@Directive({
  selector: '[popup]',
  host:{
  	'(click)':'displayMessage()'
  }
})
export class Popup {
	@Input() message: String;
	    constructor(_elementRef: ElementRef) {
	    console.log(_elementRef);
	}
	displayMessage(){
		alert(this.message);
	}
}
