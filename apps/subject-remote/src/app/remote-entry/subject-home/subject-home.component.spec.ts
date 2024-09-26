import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectHomeComponent } from './subject-home.component';

describe('SubjectHomeComponent', () => {
  let component: SubjectHomeComponent;
  let fixture: ComponentFixture<SubjectHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
