import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefRecourseToClientComponent,
    RefRecourseToClientDetailComponent,
    RefRecourseToClientUpdateComponent,
    RefRecourseToClientDeletePopupComponent,
    RefRecourseToClientDeleteDialogComponent,
    refRecourseToClientRoute,
    refRecourseToClientPopupRoute
} from './';

const ENTITY_STATES = [...refRecourseToClientRoute, ...refRecourseToClientPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefRecourseToClientComponent,
        RefRecourseToClientDetailComponent,
        RefRecourseToClientUpdateComponent,
        RefRecourseToClientDeleteDialogComponent,
        RefRecourseToClientDeletePopupComponent
    ],
    entryComponents: [
        RefRecourseToClientComponent,
        RefRecourseToClientUpdateComponent,
        RefRecourseToClientDeleteDialogComponent,
        RefRecourseToClientDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefRecourseToClientModule {}
