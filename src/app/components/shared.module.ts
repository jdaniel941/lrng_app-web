import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./atoms/input/input.component";
import { ButtonComponent } from "./atoms/button/button.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MainNavComponent } from "./elements/main-nav/main-nav.component";

@NgModule({
  declarations: [InputComponent, ButtonComponent, MainNavComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [InputComponent, ButtonComponent, MainNavComponent],
})
export class SharedModule {}
