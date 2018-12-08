import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html",
    styles: [`h2 {margin-top: 10px}`]
    
})

export class EventThumbnailComponent {
    @Input() event:any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = "some value";

    handleClick() {
        this.eventClick.emit(this.event.name);        
    }
    logFoo(){
        console.log('foo');
    }
}