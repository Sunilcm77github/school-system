import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewLectererButtonComponent } from './new-lecterer-button.component';

describe('NewLectererButtonComponent', () => {
  let component: NewLectererButtonComponent;
  let fixture: ComponentFixture<NewLectererButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLectererButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewLectererButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
