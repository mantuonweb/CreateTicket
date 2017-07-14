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
  @Input() item:any={};
  isShown:boolean=false;
  constructor(_elementRef: ElementRef) {
    $("#"+this.id).collapse('hide');
    this.item.isShown = false;
	}
	toggle(){
		$("#"+this.id).collapse('toggle');
    this.item.isShown =! this.item.isShown;
	}
}
