import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendAppViewComponent } from './friend-app-view.component';

describe('FriendAppViewComponent', () => {
  let component: FriendAppViewComponent;
  let fixture: ComponentFixture<FriendAppViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendAppViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
