import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsampleComponent } from './fsample.component';

describe('FsampleComponent', () => {
  let component: FsampleComponent;
  let fixture: ComponentFixture<FsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
