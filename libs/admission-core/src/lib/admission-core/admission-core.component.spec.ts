import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmissionCoreComponent } from './admission-core.component';

describe('AdmissionCoreComponent', () => {
  let component: AdmissionCoreComponent;
  let fixture: ComponentFixture<AdmissionCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
