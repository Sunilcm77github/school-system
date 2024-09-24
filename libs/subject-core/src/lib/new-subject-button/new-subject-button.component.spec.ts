import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewSubjectButtonComponent } from './new-subject-button.component';

describe('NewSubjectButtonComponent', () => {
  let component: NewSubjectButtonComponent;
  let fixture: ComponentFixture<NewSubjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSubjectButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewSubjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
