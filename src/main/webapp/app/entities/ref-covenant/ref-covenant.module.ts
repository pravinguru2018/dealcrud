import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefCovenantComponent,
    RefCovenantDetailComponent,
    RefCovenantUpdateComponent,
    RefCovenantDeletePopupComponent,
    RefCovenantDeleteDialogComponent,
    refCovenantRoute,
    refCovenantPopupRoute
} from './';

const ENTITY_STATES = [...refCovenantRoute, ...refCovenantPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefCovenantComponent,
        RefCovenantDetailComponent,
        RefCovenantUpdateComponent,
        RefCovenantDeleteDialogComponent,
        RefCovenantDeletePopupComponent
    ],
    entryComponents: [RefCovenantComponent, RefCovenantUpdateComponent, RefCovenantDeleteDialogComponent, RefCovenantDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefCovenantModule {}
