import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectererGridOptionsComponent } from './lecterer-grid-options.component';

describe('LectererGridOptionsComponent', () => {
  let component: LectererGridOptionsComponent;
  let fixture: ComponentFixture<LectererGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectererGridOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LectererGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
