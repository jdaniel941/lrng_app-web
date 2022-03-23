import { Component, OnInit } from "@angular/core";
import { ButtonStyle } from "../../../enum/form.enum";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"],
})
export class MainNavComponent implements OnInit {
  public buttonTypes: typeof ButtonStyle = ButtonStyle;

  constructor() {}

  ngOnInit(): void {}
}
