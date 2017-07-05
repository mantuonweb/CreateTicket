import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
//http://plnkr.co/edit/rKq8yCoNhwXFozKsKPZf?p=preview
@Directive({ selector: "[CurrencyFormatter]" })
export class CurrencyFormatter implements OnInit {

  private el: any;

  constructor(
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = "";
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = ""; // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = "";
  }

}