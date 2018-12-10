import { NgModule } from '@angular/core';

import { DealcrudSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DealcrudSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DealcrudSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DealcrudSharedCommonModule {}
