import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectGridOptionsComponent } from './subject-grid-options.component';

describe('SubjectGridOptionsComponent', () => {
  let component: SubjectGridOptionsComponent;
  let fixture: ComponentFixture<SubjectGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectGridOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
