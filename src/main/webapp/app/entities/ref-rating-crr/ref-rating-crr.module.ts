import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefRatingCrrComponent,
    RefRatingCrrDetailComponent,
    RefRatingCrrUpdateComponent,
    RefRatingCrrDeletePopupComponent,
    RefRatingCrrDeleteDialogComponent,
    refRatingCrrRoute,
    refRatingCrrPopupRoute
} from './';

const ENTITY_STATES = [...refRatingCrrRoute, ...refRatingCrrPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefRatingCrrComponent,
        RefRatingCrrDetailComponent,
        RefRatingCrrUpdateComponent,
        RefRatingCrrDeleteDialogComponent,
        RefRatingCrrDeletePopupComponent
    ],
    entryComponents: [
        RefRatingCrrComponent,
        RefRatingCrrUpdateComponent,
        RefRatingCrrDeleteDialogComponent,
        RefRatingCrrDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefRatingCrrModule {}
