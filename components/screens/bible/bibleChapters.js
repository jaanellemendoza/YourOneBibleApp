import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Reference, {
  bookNameFromId,
  chaptersInBookId,
} from "biblejs/lib/reference";
import {
  BibleHeader,
  BibleItem,
  BibleNavigation,
  useReferenceContext,
  useReferenceUpdate,
} from "../../bible";
import Icon from "react-native-vector-icons/Ionicons";
import { bookList } from "../../bible";

const BibleChapters = () => {
  const currentReference = useReferenceContext();
  const updateReference = useReferenceUpdate();

  const [bibleIDs, setBibleIDs] = useState({
    bookID: 1,
    chapterID: 1,
    verseID: 1,
  });
  //const { itemID } = route.params; //itemID here is the current bookID
  const chapters = [];
  //Populate the chapters array with chapters
  const numberOfChapters = Reference.chaptersInBookId(
    currentReference.toBookId()
  );
  for (let i = 1; i <= numberOfChapters; i++) {
    chapters.push({ id: i, type: "chapter" });
  }
  const switchBook = (option) => {
    switch (option) {
      case "next":
        //If we are on the last chapter, we switch to the next book
        //but before that, we check again if we're on the last book

        if (currentReference.book >= 66) {
          //bible has 66 books
          console.log("last book!");
          return;
        }

        updateReference(
          new Reference(
            `${bookNameFromId(currentReference.book + 1)} ${
              currentReference.chapter
            }:1`
          )
        );
        break;
      case "prev":
        //If we are on the last chapter, we switch to the next book
        //but before that, we check again if we're on the last book
        if (currentReference.book <= 1) {
          //bible has 66 books
          console.log("first book!");
          return;
        }

        updateReference(
          new Reference(
            `${bookNameFromId(currentReference.book - 1)} ${
              currentReference.chapter
            }:1`
          )
        ); //update the reference from here, then call the useEffect at bibleVerses.js (soon other screens as well)
        break;
    }
  };
  const renderItem = ({ item }) => (
    <BibleItem
      item={item}
      book={Reference.bookNameFromId(
        currentReference.toBookId()
      )} /*pass the item's book name*/
    />
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <BibleHeader text={"Select a Chapter"} />
      </View>
      <BibleNavigation
        text={bookList[currentReference.book - 1].name}
        switchFunc={switchBook}
      />
      {/*{item} will have the following props: id, type and name(if the type is "book")*/}
      <FlatList
        data={chapters}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        numColumns={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //The whole chapters page
  mainContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#222831",
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
});

export default BibleChapters;
