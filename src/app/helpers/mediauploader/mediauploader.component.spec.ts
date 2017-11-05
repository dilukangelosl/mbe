import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediauploaderComponent } from './mediauploader.component';

describe('MediauploaderComponent', () => {
  let component: MediauploaderComponent;
  let fixture: ComponentFixture<MediauploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediauploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediauploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
