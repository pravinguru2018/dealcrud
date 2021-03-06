import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefRatingSAndPComponent,
    RefRatingSAndPDetailComponent,
    RefRatingSAndPUpdateComponent,
    RefRatingSAndPDeletePopupComponent,
    RefRatingSAndPDeleteDialogComponent,
    refRatingSAndPRoute,
    refRatingSAndPPopupRoute
} from './';

const ENTITY_STATES = [...refRatingSAndPRoute, ...refRatingSAndPPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefRatingSAndPComponent,
        RefRatingSAndPDetailComponent,
        RefRatingSAndPUpdateComponent,
        RefRatingSAndPDeleteDialogComponent,
        RefRatingSAndPDeletePopupComponent
    ],
    entryComponents: [
        RefRatingSAndPComponent,
        RefRatingSAndPUpdateComponent,
        RefRatingSAndPDeleteDialogComponent,
        RefRatingSAndPDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefRatingSAndPModule {}
