import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html",
    styles: [`
    h2 {margin-top: 10px}
                .thumbnail {min-height: 240px}
                .red {color: red}
                .salad {color: lightgreen}
                .grey{color: grey}
                `]

})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = "some value";

    handleClick() {
        this.eventClick.emit(this.event.name);
    }
    logFoo() {
        console.log('foo');
    }
    getColorStartTime() {
        const early = this.event && this.event.time === '8:00 am';
        const late = this.event && this.event.time === '10:00 am';
        const normal = this.event && this.event.time === '9:00 am';
        return { salad: early, red: late, grey: normal };
    }
}
