import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloKaiasComponent } from './hello-kaias.component';

describe('HelloKaiasComponent', () => {
  let component: HelloKaiasComponent;
  let fixture: ComponentFixture<HelloKaiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloKaiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloKaiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
