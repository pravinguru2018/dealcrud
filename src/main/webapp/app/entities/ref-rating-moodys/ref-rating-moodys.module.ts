import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefRatingMoodysComponent,
    RefRatingMoodysDetailComponent,
    RefRatingMoodysUpdateComponent,
    RefRatingMoodysDeletePopupComponent,
    RefRatingMoodysDeleteDialogComponent,
    refRatingMoodysRoute,
    refRatingMoodysPopupRoute
} from './';

const ENTITY_STATES = [...refRatingMoodysRoute, ...refRatingMoodysPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefRatingMoodysComponent,
        RefRatingMoodysDetailComponent,
        RefRatingMoodysUpdateComponent,
        RefRatingMoodysDeleteDialogComponent,
        RefRatingMoodysDeletePopupComponent
    ],
    entryComponents: [
        RefRatingMoodysComponent,
        RefRatingMoodysUpdateComponent,
        RefRatingMoodysDeleteDialogComponent,
        RefRatingMoodysDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefRatingMoodysModule {}
