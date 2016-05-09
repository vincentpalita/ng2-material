import {Directive, Output, EventEmitter, HostListener} from "@angular/core";

/**
 * @name mdContent
 *
 * @description
 * The `<md-content>` directive is a container element useful for scrollable content
 *
 * @usage
 *
 * - Add the `[layout-padding]` attribute to make the content padded.
 *
 * <hljs lang="html">
 *  <md-content layout-padding>
 *      Lorem ipsum dolor sit amet, ne quod novum mei.
 *  </md-content>
 * </hljs>
 *
 */
@Directive({selector: 'md-content'})
export class MdContent {

  @Output() scrolled: EventEmitter<number> = new EventEmitter<number>();

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const scroller = event.currentTarget as HTMLElement;
    this.scrolled.emit(scroller.scrollTop);
  }
}
