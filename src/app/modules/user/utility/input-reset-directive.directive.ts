import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appInputResetDirective]'
})
export class InputResetDirective implements OnInit{
    focused= false;

    constructor(private elRef: ElementRef){}
    ngOnInit() {
    }

    @HostListener('focusout') focusout(eventData:Event){
        console.log('Focus lost!');
        this.focused=false;
    }
    @HostListener('focusin') focusin(eventData:Event) {
        console.log('focused');
        this.focused=true;
    }
    @HostListener('document:keydown.escape',['$event']) onKeydownHandler(event:KeyboardEvent) {
        if(this.focused){
            (this.elRef.nativeElement as HTMLInputElement).value='';
            console.log('cleared?');
        } else{
            console.log('Not focused!');
        }
    }
}