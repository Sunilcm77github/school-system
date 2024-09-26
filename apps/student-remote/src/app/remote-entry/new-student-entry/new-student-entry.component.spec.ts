import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewStudentEntryComponent } from './new-student-entry.component';

describe('NewStudentEntryComponent', () => {
  let component: NewStudentEntryComponent;
  let fixture: ComponentFixture<NewStudentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStudentEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewStudentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
