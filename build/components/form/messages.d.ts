import { FormControl, ControlContainer } from "@angular/forms";
import { QueryList, OnDestroy, OnInit } from "@angular/core";
export declare class MdMessage {
    errorKey: string;
    okay: boolean;
}
export declare class MdMessages implements OnInit, OnDestroy {
    private _parent;
    property: string;
    messages: QueryList<MdMessage>;
    path: string[];
    formDirective: any;
    control: FormControl;
    valid: boolean;
    isTouched: boolean;
    constructor(_parent: ControlContainer);
    private _controlSubscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _valueChanged();
}
