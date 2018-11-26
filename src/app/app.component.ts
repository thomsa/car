import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "car-runner";
  ignited = false;
  isRunning = false;
  gas = 0;
  oil = 0;
  coolingLiquid = 0;
  isKeyIn = false;

  runningInterval;
  ignite() {
    if (
      !this.isKeyIn ||
      this.gas === 0 ||
      this.oil === 0 ||
      this.coolingLiquid === 0
    ) {
      alert("This car can't start! Probably there's no gas or oil!");
    } else {
      this.ignited = true;
    }
  }

  start() {
    if (this.ignited) {
      this.isRunning = true;
    }
    this.runningInterval = setInterval(() => {
      if (this.isRunning) {
        this.gas = this.gas - 1;
        this.oil = this.oil - 0.01;
      }
    }, 1000);
  }
  stop() {
    this.runningInterval = undefined;
    this.isRunning = false;
  }
}
