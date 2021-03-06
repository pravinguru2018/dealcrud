import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefBookingEntityComponent,
    RefBookingEntityDetailComponent,
    RefBookingEntityUpdateComponent,
    RefBookingEntityDeletePopupComponent,
    RefBookingEntityDeleteDialogComponent,
    refBookingEntityRoute,
    refBookingEntityPopupRoute
} from './';

const ENTITY_STATES = [...refBookingEntityRoute, ...refBookingEntityPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefBookingEntityComponent,
        RefBookingEntityDetailComponent,
        RefBookingEntityUpdateComponent,
        RefBookingEntityDeleteDialogComponent,
        RefBookingEntityDeletePopupComponent
    ],
    entryComponents: [
        RefBookingEntityComponent,
        RefBookingEntityUpdateComponent,
        RefBookingEntityDeleteDialogComponent,
        RefBookingEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefBookingEntityModule {}
