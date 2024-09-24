import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassCoreComponent } from './class-core.component';

describe('ClassCoreComponent', () => {
  let component: ClassCoreComponent;
  let fixture: ComponentFixture<ClassCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
