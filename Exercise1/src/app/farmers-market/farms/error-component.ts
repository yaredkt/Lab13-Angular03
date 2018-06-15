import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  template: `
<p style="color: red">You didn't provide an ID or the Farm doesn't exist.
</p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
