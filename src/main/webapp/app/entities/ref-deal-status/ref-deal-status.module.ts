import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefDealStatusComponent,
    RefDealStatusDetailComponent,
    RefDealStatusUpdateComponent,
    RefDealStatusDeletePopupComponent,
    RefDealStatusDeleteDialogComponent,
    refDealStatusRoute,
    refDealStatusPopupRoute
} from './';

const ENTITY_STATES = [...refDealStatusRoute, ...refDealStatusPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefDealStatusComponent,
        RefDealStatusDetailComponent,
        RefDealStatusUpdateComponent,
        RefDealStatusDeleteDialogComponent,
        RefDealStatusDeletePopupComponent
    ],
    entryComponents: [
        RefDealStatusComponent,
        RefDealStatusUpdateComponent,
        RefDealStatusDeleteDialogComponent,
        RefDealStatusDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefDealStatusModule {}
