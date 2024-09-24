import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentSmartFilterComponent } from './student-smart-filter.component';

describe('StudentSmartFilterComponent', () => {
  let component: StudentSmartFilterComponent;
  let fixture: ComponentFixture<StudentSmartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSmartFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentSmartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
