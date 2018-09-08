import { NgFxControl, NgFxEvent } from './../../../lib/ui/src/components/slider/draggable.directive';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public vertControl: NgFxControl = {
    name: 'slider',
    orient: 'is--vert',
    min: 0,
    max: 255
  };

  public joyControl: NgFxControl = {
    name: 'joystick',
    orient: 'is--joystick',
    min: [0, 0],
    max: [255, 255],
    snapToCenter: true
  };

  public joyControl2: NgFxControl = {
    name: 'h',
    orient: 'is--hor',
    min: [0, 0],
    max: [255, 255]
  };

  constructor() {}

  ngOnInit() {}

  onControlEmit(ev: NgFxEvent) {
    console.log(ev);
  }
}