import { Directive,ElementRef,Input } from '@angular/core';
declare var $;
@Directive({
  selector: '[accordion]',
  host:{
  	'(click)':'toggle()'
  }
})
export class Accordion {
	@Input() id: String;
    constructor(_elementRef: ElementRef) {
    $("#"+this.id).collapse('hide');
	}
	toggle(){
		$("#"+this.id).collapse('toggle');
	}
}
