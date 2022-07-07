import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import Reference, {
  bookNameFromId,
  chaptersInBookId,
} from "biblejs/lib/reference";
import {
  BibleHeader,
  BibleItem,
  BibleNavigation,
  bookList,
  useReferenceContext,
  useReferenceUpdate,
} from "../../bible";

const BibleVerses = () => {
  const currentReference = useReferenceContext(); //grab the current reference from bible context
  const updateReference = useReferenceUpdate();
  //const { itemID } = route.params; //itemID here is the converted (absolute) id of the currently selected chapter
  const verses = [];
  //We populate the verse array first
  const numberOfVerses = Reference.versesInChapterId(
    currentReference.toChapterId()
  );
  for (let i = 1; i <= numberOfVerses; i++) {
    verses.push({ id: i, type: "verse" });
  }
  const switchChapter = (option) => {
    switch (option) {
      case "next":
        //First check if there's still a next chapter
        if (
          currentReference.chapter >= chaptersInBookId(currentReference.book)
        ) {
          console.log("last chapter!");
          //If we are on the last chapter, we switch to the next book
          //but before that, we check again if we're on the last book
          if (currentReference.book >= 66) {
            //bible has 66 books
            console.log("last book!");
            return;
          }
          return;
        }
        updateReference(
          new Reference(
            `${bookNameFromId(currentReference.book)} ${
              currentReference.chapter + 1
            }:1`
          )
        );
        break;
      case "prev":
        //First check if there's still a prev chapter
        if (currentReference.chapter <= 1) {
          console.log("first chapter!");
          //If we are on the last chapter, we switch to the next book
          //but before that, we check again if we're on the last book
          if (currentReference.book <= 1) {
            //bible has 66 books
            console.log("first book!");
            return;
          }
          return;
        }
        updateReference(
          new Reference(
            `${bookNameFromId(currentReference.book)} ${
              currentReference.chapter - 1
            }:1`
          )
        ); //update the reference from here, then call the useEffect at bibleVerses.js (soon other screens as well)
        break;
    }
  };
  //useEffect==========================================================>
  useEffect(() => {
    //This will handle the updating of the list whenever the user switches chapters
    console.log("rendered", currentReference);
  }, [currentReference]);
  //useEffect=========================================================/>
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <BibleHeader text={"Select a verse"} />
      </View>
      <BibleNavigation
        text={`Chapter ${currentReference.chapter} of ${
          bookList[currentReference.book - 1].name
        }`}
        switchFunc={switchChapter}
      />
      <FlatList
        data={verses}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <BibleItem
            item={item}
            book={currentReference.book} //get the bookid
            chapter={currentReference.chapter} /*pass the item's book name*/
          />
        )}
        numColumns={5}
      />
    </View>
  );
};

export default BibleVerses;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#222831",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
});
