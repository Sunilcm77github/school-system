import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturerCoreComponent } from './lecturer-core.component';

describe('LecturerCoreComponent', () => {
  let component: LecturerCoreComponent;
  let fixture: ComponentFixture<LecturerCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
