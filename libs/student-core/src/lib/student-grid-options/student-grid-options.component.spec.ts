import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentGridOptionsComponent } from './student-grid-options.component';

describe('StudentGridOptionsComponent', () => {
  let component: StudentGridOptionsComponent;
  let fixture: ComponentFixture<StudentGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGridOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
