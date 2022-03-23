import { Component, Input, OnInit } from "@angular/core";
import { ButtonStyle } from "../../../enum/form.enum";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() buttonStyle: ButtonStyle = ButtonStyle.Primary;

  constructor() {}

  ngOnInit(): void {}
}
