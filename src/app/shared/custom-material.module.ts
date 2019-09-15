import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatInputModule, MatGridListModule, MatDialogModule, MatTabsModule, MatSelectModule, MatAutocompleteModule,
  MatSidenavModule, MatToolbarModule, MatIconModule, MatBottomSheetModule, MatMenuModule, MatChipsModule, MatCardModule, MatTooltipModule, MatExpansionModule
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  exports: [
    MatTableModule,
    CdkTableModule,
    MatButtonModule,
    OverlayModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule,
    MatExpansionModule
  ]
})
export class CustomMaterialModule {
}
