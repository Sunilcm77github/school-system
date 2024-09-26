import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewSubjectEntryComponent } from './new-subject-entry.component';

describe('NewSubjectEntryComponent', () => {
  let component: NewSubjectEntryComponent;
  let fixture: ComponentFixture<NewSubjectEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSubjectEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewSubjectEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
