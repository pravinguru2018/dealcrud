import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealcrudSharedModule } from 'app/shared';
import {
    RefSyndicationTeamComponent,
    RefSyndicationTeamDetailComponent,
    RefSyndicationTeamUpdateComponent,
    RefSyndicationTeamDeletePopupComponent,
    RefSyndicationTeamDeleteDialogComponent,
    refSyndicationTeamRoute,
    refSyndicationTeamPopupRoute
} from './';

const ENTITY_STATES = [...refSyndicationTeamRoute, ...refSyndicationTeamPopupRoute];

@NgModule({
    imports: [DealcrudSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RefSyndicationTeamComponent,
        RefSyndicationTeamDetailComponent,
        RefSyndicationTeamUpdateComponent,
        RefSyndicationTeamDeleteDialogComponent,
        RefSyndicationTeamDeletePopupComponent
    ],
    entryComponents: [
        RefSyndicationTeamComponent,
        RefSyndicationTeamUpdateComponent,
        RefSyndicationTeamDeleteDialogComponent,
        RefSyndicationTeamDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudRefSyndicationTeamModule {}
