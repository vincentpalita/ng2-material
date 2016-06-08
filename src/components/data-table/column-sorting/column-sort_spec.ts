import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  injectAsync,
  it,
  async
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from "@angular/compiler/testing";
import {Component, DebugElement, ViewChildren, QueryList, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {By} from "@angular/platform-browser";
import {
  MdDataColumnSortingService,
  MdDataColumnSortDirective,
  SortDirection,
  ColumnSortingModel
} from './index';

export function main() {

  @Component({
    selector: 'colsort-test-cmp',
    providers: [MdDataColumnSortingService],
    directives: [CORE_DIRECTIVES, MdDataColumnSortDirective],
    template: `
    <table>
      <thead>
        <tr>
          <th md-data-column-sort="1">Wine</th>
          <th md-data-column-sort="2">Cheese</th>
          <th md-data-column-sort="3">Crackers</th>
        </tr>
      </thead>
    </table>`
  })
  class ColsortTestComponent implements OnInit {
    defaultModel: ColumnSortingModel = {
      column: '1',
      direction: SortDirection.DESCEND
    };
    @ViewChildren(MdDataColumnSortDirective) columns: QueryList<MdDataColumnSortDirective>;

    /**
     * Constructor.
     * @param sortingService - reference to the service for this area.
     */
    constructor(public sortingService: MdDataColumnSortingService) { }

    ngOnInit() {
      this.sortingService.setSorting(this.defaultModel);
    }
  }

  let fixture: ComponentFixture<ColsortTestComponent>;
  let service: MdDataColumnSortingService;
  let testCmp: ColsortTestComponent;

  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(injectAsync([TestComponentBuilder], (tcb) => {
    return tcb
      .createAsync(ColsortTestComponent)
      .then(f => {
        f.detectChanges();
        fixture = f;
        testCmp = fixture.componentInstance;
      })
      .catch(console.error.bind(console));
  }));

  describe('MdDataSortColumnService', () => {
    describe('sortingColumn', () => {

      it('is observable sorting state', done => {
        expect(testCmp.sortingService.sortingColumn$.subscribe).toBeDefined();
        testCmp.sortingService.sortingColumn$.subscribe((col) => {
          expect(col).toEqual(testCmp.defaultModel);
          done();
        });
      });

    });

    describe('setSorting', () => {
      it('sets sorting programatically', done => {
        let notDefault = false;
        let testSort = { column: '1', direction: SortDirection.ASCEND };
        expect(testCmp.sortingService.sortingColumn$).toBeDefined();

        testCmp.sortingService.sortingColumn$.subscribe(col => {
          if (notDefault) {
            expect(col).toEqual(testSort);
            done();
          }
          notDefault = true;
        });

        testCmp.sortingService.setSorting(testSort);
      });
    });

    describe('onColumnSelect', () => {
      it('updates sorting to selected column', done => {
        let clicks = 0;
        let currentSort = { column: '1', direction: SortDirection.ASCEND };
        let firstSort = { column: '2', direction: SortDirection.ASCEND };
        let secondSort = { column: '3', direction: SortDirection.ASCEND };
        let thirdSort = currentSort;

        testCmp.sortingService.sortingColumn$.subscribe(col => {
          switch (clicks) {
            case 0:
              //expect it to be default
              expect(col).toEqual(testCmp.defaultModel);
              break;
            case 1:
              //change to be col 2
              expect(col).toEqual(firstSort);
              break;
            case 2:
              // change to col 3:
              expect(col).toEqual(secondSort);
              break;
            case 3:
              // click same column inverts back:
              expect(col).toEqual(thirdSort);
              done();
              break;
          }

          currentSort = col;
          clicks ++;

        });

        testCmp.sortingService.onColumnSelect('2', currentSort);
        testCmp.sortingService.onColumnSelect('3', currentSort);
        testCmp.sortingService.onColumnSelect('1', currentSort);

      });

      it('inverts sorting if column is the same', done => {
        let clicks = 0;
        let currentSort = { column: '1', direction: SortDirection.DESCEND };
        let firstSort = { column: '3', direction: SortDirection.ASCEND };
        let secondSort = { column: '3', direction: SortDirection.DESCEND };
        let thirdSort = firstSort;

        testCmp.sortingService.sortingColumn$.subscribe(col => {
          switch (clicks) {
            case 1:
              //change to clicked column ASCENDING
              expect(col).toEqual(firstSort);
              break;
            case 2:
              // click same column inverts direction:
              expect(col).toEqual(secondSort);
              break;
            case 3:
              // click same column inverts back:
              expect(col).toEqual(thirdSort);
              done();
              break;
          }

          currentSort = col;
          clicks ++;

        });

        while (clicks < 4) {
          testCmp.sortingService.onColumnSelect('3', currentSort);
        }

      });

      it('handles column input even with no "current" model', done => {
        let count = 0;
        testCmp.sortingService.sortingColumn$.subscribe(col => {
          if (!count) {
            // not testing the default value.
            count ++;
            return;
          }
          expect(col).toEqual({ column: '2', direction: SortDirection.ASCEND });
          done();
        });

        testCmp.sortingService.onColumnSelect('2', null);

      });

    });
  });

  describe('MdDataSortColumnDirective', () => {

    it('listens to MdDataColumnSortingService', done => {
      let firstColumn: MdDataColumnSortDirective = testCmp.columns.first;
      let count = 0
      testCmp.sortingService.sortingColumn$.subscribe(col => {
        if (!count) {
          // not testing the default value.
          count ++;
          return;
        }
        expect(firstColumn.sortingSubscription).toBeDefined();
        expect(firstColumn.sortingColumn).toEqual(col);
        done();
      });

      testCmp.sortingService.setSorting({ column: '1', direction: SortDirection.ASCEND });

    });

    it('notifies the MdDataColumnSortingService on click', () => {
      let secondColumn:MdDataColumnSortDirective = testCmp.columns.toArray()[1];
      let secondHost = fixture.nativeElement.querySelector('th[md-data-column-sort="2"]');
      let clickSpy = spyOn(secondColumn, 'sortBy').and.callThrough();
      let changeSpy = spyOn(testCmp.sortingService, 'onColumnSelect').and.callThrough();

      expect(changeSpy).not.toHaveBeenCalled();

      secondHost.click();

      expect(clickSpy).toHaveBeenCalled();
      expect(changeSpy.calls.argsFor(0)[0]).toEqual('2');
      expect(changeSpy.calls.argsFor(0)[1]).toEqual(testCmp.defaultModel);

    });

    it('styles it\'s host according to sorting state', () => {
      let el = fixture.nativeElement;
      let first = el.querySelector('th[md-data-column-sort="1"]');
      let seconnd = el.querySelector('th[md-data-column-sort="2"]');
      let third = el.querySelector('th[md-data-column-sort="3"]');

      //it finds class "sortable on it's host elements:
      expect(first.classList.contains('sortable')).toBe(true);;
      expect(seconnd.classList.contains('sortable')).toBe(true);;
      expect(third.classList.contains('sortable')).toBe(true);

      third.click();
      fixture.detectChanges();
      expect(third.classList.contains('sorted-ascending')).toBe(true);
      expect(third.classList.contains('sorted-descending')).toBe(false);

      third.click();
      fixture.detectChanges();
      expect(third.classList.contains('sorted-ascending')).toBe(false);
      expect(third.classList.contains('sorted-descending')).toBe(true);
    });

  });

}
