import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DealcrudRefSyndicationTeamModule } from './ref-syndication-team/ref-syndication-team.module';
import { DealcrudRefDealStatusModule } from './ref-deal-status/ref-deal-status.module';
import { DealcrudRefOriginationTeamModule } from './ref-origination-team/ref-origination-team.module';
import { DealcrudRefLineOfBusinessModule } from './ref-line-of-business/ref-line-of-business.module';
import { DealcrudRefRecourseToClientModule } from './ref-recourse-to-client/ref-recourse-to-client.module';
import { DealcrudRefRatingCrrModule } from './ref-rating-crr/ref-rating-crr.module';
import { DealcrudRefRatingMoodysModule } from './ref-rating-moodys/ref-rating-moodys.module';
import { DealcrudRefRatingSAndPModule } from './ref-rating-s-and-p/ref-rating-s-and-p.module';
import { DealcrudRefRatingFitchModule } from './ref-rating-fitch/ref-rating-fitch.module';
import { DealcrudRefCountryModule } from './ref-country/ref-country.module';
import { DealcrudRefPraSectorModule } from './ref-pra-sector/ref-pra-sector.module';
import { DealcrudDealModule } from './deal/deal.module';
import { DealcrudRefFacilityTypeModule } from './ref-facility-type/ref-facility-type.module';
import { DealcrudRefBookingEntityModule } from './ref-booking-entity/ref-booking-entity.module';
import { DealcrudRefSeniorityModule } from './ref-seniority/ref-seniority.module';
import { DealcrudRefCovenantModule } from './ref-covenant/ref-covenant.module';
import { DealcrudTrancheModule } from './tranche/tranche.module';
import { DealcrudTrancheMarginModule } from './tranche-margin/tranche-margin.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        DealcrudRefSyndicationTeamModule,
        DealcrudRefDealStatusModule,
        DealcrudRefOriginationTeamModule,
        DealcrudRefLineOfBusinessModule,
        DealcrudRefRecourseToClientModule,
        DealcrudRefRatingCrrModule,
        DealcrudRefRatingMoodysModule,
        DealcrudRefRatingSAndPModule,
        DealcrudRefRatingFitchModule,
        DealcrudRefCountryModule,
        DealcrudRefPraSectorModule,
        DealcrudDealModule,
        DealcrudRefFacilityTypeModule,
        DealcrudRefBookingEntityModule,
        DealcrudRefSeniorityModule,
        DealcrudRefCovenantModule,
        DealcrudTrancheModule,
        DealcrudTrancheMarginModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DealcrudEntityModule {}
