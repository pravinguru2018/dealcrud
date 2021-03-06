import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefCountryComponent,
    RefCountryDetailComponent,
    RefCountryUpdateComponent,
    RefCountryDeletePopupComponent,
    RefCountryDeleteDialogComponent,
    refCountryRoute,
    refCountryPopupRoute
} from './';

const ENTITY_STATES = [...refCountryRoute, ...refCountryPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefCountryComponent,
        RefCountryDetailComponent,
        RefCountryUpdateComponent,
        RefCountryDeleteDialogComponent,
        RefCountryDeletePopupComponent
    ],
    entryComponents: [RefCountryComponent, RefCountryUpdateComponent, RefCountryDeleteDialogComponent, RefCountryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefCountryModule {}
