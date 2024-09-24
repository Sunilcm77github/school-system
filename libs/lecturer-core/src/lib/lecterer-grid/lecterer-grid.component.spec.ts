import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectererGridComponent } from './lecterer-grid.component';

describe('LectererGridComponent', () => {
  let component: LectererGridComponent;
  let fixture: ComponentFixture<LectererGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectererGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LectererGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
