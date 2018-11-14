import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BookmarkState, selectAllBookmarks } from './store/bookmark.reducer';
import {
  AddBookmark,
  DeleteBookmark,
  HideBookmarks,
  LoadBookmarkState,
  ShowBookmarks,
  ToggleBookmarks,
  UpdateBookmark
} from './store/bookmark.actions';
import { Observable } from 'rxjs';
import { Bookmark } from './bookmark.model';
import shortid from 'shortid';
import { selectIsShowBookmarkBar } from '../core/layout/store/layout.reducer';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks$: Observable<Bookmark[]> = this._store$.pipe(select(selectAllBookmarks));
  isShowBookmarkBar$: Observable<boolean> = this._store$.pipe(select(selectIsShowBookmarkBar));

  constructor(private _store$: Store<BookmarkState>) {
  }

  loadBookmarkState(state: BookmarkState) {
    this._store$.dispatch(new LoadBookmarkState({state}));
  }

  addBookmark(bookmark: Bookmark) {
    this._store$.dispatch(new AddBookmark({
      bookmark: {
        ...bookmark,
        id: shortid()
      }
    }));
  }

  deleteBookmark(id: string) {
    this._store$.dispatch(new DeleteBookmark({id}));
  }

  updateBookmark(id: string, changes: Partial<Bookmark>) {
    this._store$.dispatch(new UpdateBookmark({bookmark: {id, changes}}));
  }


  showBookmarks() {
    this._store$.dispatch(new ShowBookmarks());
  }

  hideBookmarks() {
    this._store$.dispatch(new HideBookmarks());
  }

  toggleBookmarks() {
    this._store$.dispatch(new ToggleBookmarks());
  }

  // loadBookmarks() {
  //   this._store$.dispatch(new LoadBookmarks());
  // }
  //
  // upsertBookmark() {
  //   this._store$.dispatch(new UpsertBookmark());
  // }
  //
  // addBookmarks() {
  //   this._store$.dispatch(new AddBookmarks());
  // }
  //
  // upsertBookmarks() {
  //   this._store$.dispatch(new UpsertBookmarks());
  // }
  //
  //
  // updateBookmarks() {
  //   this._store$.dispatch(new UpdateBookmarks());
  // }
  //
  //
  // deleteBookmarks() {
  //   this._store$.dispatch(new DeleteBookmarks());
  // }
  //
  // clearBookmarks() {
  //   this._store$.dispatch(new ClearBookmarks());
  // }
}