import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentCoreComponent } from './student-core.component';

describe('StudentCoreComponent', () => {
  let component: StudentCoreComponent;
  let fixture: ComponentFixture<StudentCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
