import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDetailPage } from './list-detail.page';

describe('ExercisesDetailPage', () => {
  let component: ListDetailPage;
  let fixture: ComponentFixture<ListDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
