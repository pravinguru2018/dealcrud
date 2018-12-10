import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefFacilityTypeComponent,
    RefFacilityTypeDetailComponent,
    RefFacilityTypeUpdateComponent,
    RefFacilityTypeDeletePopupComponent,
    RefFacilityTypeDeleteDialogComponent,
    refFacilityTypeRoute,
    refFacilityTypePopupRoute
} from './';

const ENTITY_STATES = [...refFacilityTypeRoute, ...refFacilityTypePopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefFacilityTypeComponent,
        RefFacilityTypeDetailComponent,
        RefFacilityTypeUpdateComponent,
        RefFacilityTypeDeleteDialogComponent,
        RefFacilityTypeDeletePopupComponent
    ],
    entryComponents: [
        RefFacilityTypeComponent,
        RefFacilityTypeUpdateComponent,
        RefFacilityTypeDeleteDialogComponent,
        RefFacilityTypeDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefFacilityTypeModule {}
