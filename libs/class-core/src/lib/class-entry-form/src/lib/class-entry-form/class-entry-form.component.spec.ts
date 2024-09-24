import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassEntryFormComponent } from './class-entry-form.component';

describe('ClassEntryFormComponent', () => {
  let component: ClassEntryFormComponent;
  let fixture: ComponentFixture<ClassEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassEntryFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
