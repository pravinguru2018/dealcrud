/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { DealcrudTestModule } from '../../../test.module';
import { RefSyndicationTeamDeleteDialogComponent } from 'app/entities/ref-syndication-team/ref-syndication-team-delete-dialog.component';
import { RefSyndicationTeamService } from 'app/entities/ref-syndication-team/ref-syndication-team.service';

describe('Component Tests', () => {
    describe('RefSyndicationTeam Management Delete Component', () => {
        let comp: RefSyndicationTeamDeleteDialogComponent;
        let fixture: ComponentFixture<RefSyndicationTeamDeleteDialogComponent>;
        let service: RefSyndicationTeamService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DealcrudTestModule],
                declarations: [RefSyndicationTeamDeleteDialogComponent]
            })
                .overrideTemplate(RefSyndicationTeamDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(RefSyndicationTeamDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RefSyndicationTeamService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
