import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassGridOptionsComponent } from './class-grid-options.component';

describe('ClassGridOptionsComponent', () => {
  let component: ClassGridOptionsComponent;
  let fixture: ComponentFixture<ClassGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassGridOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
