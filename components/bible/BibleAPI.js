import BibleJSON from "./Bible_English_TNIV.json";
import Reference from "biblejs/lib/reference";

const Bible = () => {
  //How to get a specific verse
  //Example Gen 1:1
  //BIBLEBOOK = 0 or Reference.("Genesis").toBookId
  //CHAPTER = 0 or Reference("Genesis 1").toChapterId()
  //VERSE = 0 or Reference("Genesis 1:1").toVerseId()
  //console.log(BibleJSON.XMLBIBLE.BIBLEBOOK[0].CHAPTER[0].VERSE[0]);
  console.log(Reference.bookNameFromId(Reference.fromChapterId(1).book));
  return BibleJSON.XMLBIBLE; //returns the whole bible as a json
};

export const getChapter = (bookID, chapterID) => {
  return BibleJSON.XMLBIBLE.BIBLEBOOK[bookID].CHAPTER[chapterID]; //Returns the whole chapter
};

export default Bible;
