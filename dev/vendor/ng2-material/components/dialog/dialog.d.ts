export declare class MdDialogTitle {
}
export declare class MdDialogActions {
}
export declare class MdDialog {
    title: string;
    text: string;
    cancel: string;
    ok: string;
    show(): Promise<MdDialog>;
}
