import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') condition: boolean = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log(event.target);
    this.condition = this.elRef.nativeElement.contains(event.target)
      ? !this.condition
      : false;
  }

  //   @HostListener('document: click') onClick() {
  //     this.condition = !this.condition;
  //   }
}
