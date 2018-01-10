import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonDataService} from "../services/data/common.data.service";
import {HttpModule} from "@angular/http";
import {AmexioTreeViewComponent} from "./tree/tree.component";
import {AmexioListBoxComponent} from "./listbox/listbox.component";
import {AmexioDatagridComponent} from "./datagrid/datagrid.component";
import {DataGridFilterComponent} from "./datagrid/datagrid.filter.component";
import {AmexioLayoutModule} from "../layout/amexio.layout.module";

export * from '../services/data/common.data.service';
export * from './listbox/listbox.component';
export * from './tree/tree.component';

const DATA_COMPONENTS = [
  AmexioTreeViewComponent,
  AmexioListBoxComponent,
  AmexioDatagridComponent,
  DataGridFilterComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioLayoutModule
  ],
  exports: DATA_COMPONENTS,
  declarations: DATA_COMPONENTS
})
export class AmexioDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmexioDataModule,
      providers: [CommonDataService]
    };
  }
}