import bookList from "./bookList";
import BibleAPI from "./BibleAPI";
import BibleItem from "./BibleItem";
import Bible, { getChapter } from "./BibleAPI";
import BibleNavigation from "./BibleNavigation";
import BibleContexts, {
  useReferenceContext,
  useReferenceUpdate,
} from "./BibleContexts";
import BibleHeader from "./BibleHeader";

export {
  bookList,
  BibleAPI,
  BibleItem,
  Bible,
  getChapter,
  BibleNavigation,
  BibleContexts,
  useReferenceContext,
  useReferenceUpdate,
  BibleHeader
};
/*
bookList contains all the books of the bible in an array.
BibleAPI was trashed and just serves a single purpose of getting an entire chapter of a book.
BibleItem are the selectable items in the bible screens with the exception of the actual texts themselves.
forgot what BibleNavigation is about.
BibleContexts will be the global state handler for the bible screens
useReferenceContext for useContext(ReferenceContext), basically for grabbing the current Reference
useReferenceUpdate for useContext(ReferenceContext), basically for updating the current Reference
*/
