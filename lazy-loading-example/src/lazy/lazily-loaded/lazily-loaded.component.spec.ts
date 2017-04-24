import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LazilyLoadedComponent } from "./lazily-loaded.component";

describe("LazilyLoadedComponent", () => {
  let component: LazilyLoadedComponent;
  let fixture: ComponentFixture<LazilyLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazilyLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazilyLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
