import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    TranslateModule
  ],
  exports: [
    CustomMaterialModule,
    TranslateModule
  ]
})
export class SharedModule { }
