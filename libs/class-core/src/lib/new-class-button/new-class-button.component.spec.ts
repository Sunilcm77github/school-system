import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewClassButtonComponent } from './new-class-button.component';

describe('NewClassButtonComponent', () => {
  let component: NewClassButtonComponent;
  let fixture: ComponentFixture<NewClassButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewClassButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewClassButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
