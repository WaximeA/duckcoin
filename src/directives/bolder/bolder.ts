import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the BolderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[bolder]' // Attribute selector
})
export class BolderDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.style.fontWeight = 'bold';
  }

}
