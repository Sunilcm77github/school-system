import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewStudentButtonComponent } from './new-student-button.component';

describe('NewStudentButtonComponent', () => {
  let component: NewStudentButtonComponent;
  let fixture: ComponentFixture<NewStudentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStudentButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewStudentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
