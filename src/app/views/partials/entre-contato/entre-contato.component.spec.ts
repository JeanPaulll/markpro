import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreContatoComponent } from './entre-contato.component';

describe('EntreContatoComponent', () => {
  let component: EntreContatoComponent;
  let fixture: ComponentFixture<EntreContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
