import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {AmexioFormsModule} from "./forms/amexio.forms.module";
import {CommonDataService} from "./services/data/common.data.service";
import {AmexioNavModule} from "./navigation/amexio.nav.module";
import {AmexioDataModule} from "./data/amexio.data.module";
import {DeviceQueryService} from "./services/device/device.query.service";
import {AmexioLayoutModule} from "./layout/amexio.layout.module";
import {AmexioMediaModule} from "./media/amexio.media.module";
import {IconLoaderService} from "./services/icon/icon.service";

export * from './services/data/common.data.service';
export * from './services/device/device.query.service';
export * from './services/icon/icon.service';

@NgModule({
  imports: [
    CommonModule,
    AmexioFormsModule,
    AmexioNavModule,
    AmexioDataModule,
    AmexioLayoutModule,
    AmexioMediaModule
  ],
  exports: [
    AmexioFormsModule,
    AmexioNavModule,
    AmexioDataModule,
    AmexioLayoutModule,
    AmexioMediaModule
  ],
  declarations: []
})
export class AmexioWidgetModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmexioWidgetModule,
      providers: [CommonDataService,DeviceQueryService,IconLoaderService]
    };
  }
}
