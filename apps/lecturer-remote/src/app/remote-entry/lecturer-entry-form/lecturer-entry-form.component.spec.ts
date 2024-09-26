import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturerEntryFormComponent } from './lecturer-entry-form.component';

describe('LecturerEntryFormComponent', () => {
  let component: LecturerEntryFormComponent;
  let fixture: ComponentFixture<LecturerEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerEntryFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
