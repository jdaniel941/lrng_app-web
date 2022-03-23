import { Component, Input, OnInit } from "@angular/core";
import { InputType } from "../../../enum/form.enum";
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input() error = null;
  @Input() type: InputType = InputType.TEXT;
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() control: AbstractControl;

  get controlAsFormControl() {
    return this.control as FormControl;
  }

  constructor() {}

  ngOnInit(): void {}
}
