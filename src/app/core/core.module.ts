import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class CoreModule { }
