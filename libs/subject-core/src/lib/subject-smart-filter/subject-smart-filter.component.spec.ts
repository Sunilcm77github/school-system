import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectSmartFilterComponent } from './subject-smart-filter.component';

describe('SubjectSmartFilterComponent', () => {
  let component: SubjectSmartFilterComponent;
  let fixture: ComponentFixture<SubjectSmartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectSmartFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectSmartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
