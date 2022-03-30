import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JogoEditComponent } from './jogo-edit.component';
import { JogoService } from '../jogo.service';

describe('JogoEditComponent', () => {
  let component: JogoEditComponent;
  let fixture: ComponentFixture<JogoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JogoEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [JogoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
