import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefSeniorityComponent,
    RefSeniorityDetailComponent,
    RefSeniorityUpdateComponent,
    RefSeniorityDeletePopupComponent,
    RefSeniorityDeleteDialogComponent,
    refSeniorityRoute,
    refSeniorityPopupRoute
} from './';

const ENTITY_STATES = [...refSeniorityRoute, ...refSeniorityPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefSeniorityComponent,
        RefSeniorityDetailComponent,
        RefSeniorityUpdateComponent,
        RefSeniorityDeleteDialogComponent,
        RefSeniorityDeletePopupComponent
    ],
    entryComponents: [
        RefSeniorityComponent,
        RefSeniorityUpdateComponent,
        RefSeniorityDeleteDialogComponent,
        RefSeniorityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefSeniorityModule {}
