import { EventEmitter } from "@angular/core";
export declare class MdContent {
    scrolled: EventEmitter<number>;
    onScroll(event: Event): void;
}
