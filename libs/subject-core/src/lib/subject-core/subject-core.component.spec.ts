import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectCoreComponent } from './subject-core.component';

describe('SubjectCoreComponent', () => {
  let component: SubjectCoreComponent;
  let fixture: ComponentFixture<SubjectCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
