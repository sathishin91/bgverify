import { DataService } from './select-item/ng-select.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule as formModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SelectItemComponent } from './select-item/select-item.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AdvanceControlComponent } from './advance-control/advance-control.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { EditorsComponent } from './editors/editors.component';

@NgModule({
  declarations: [
    BasicFormComponent,
    InputMaskComponent,
    SelectItemComponent,
    AdvanceControlComponent,
    FormExampleComponent,
    FormValidationComponent,
    EditorsComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgSelectModule,
    CKEditorModule,
    NgxMaskDirective,
    NgxMaskPipe,
    formModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, provideNgxMask()],
})
export class FormsModule {}
