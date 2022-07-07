import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import {
  BibleHeader,
  BibleNavigation,
  bookList,
  getChapter,
} from "../../bible";
import Reference, {
  bookNameFromId,
  chaptersInBookId,
} from "biblejs/lib/reference";
import { useReferenceContext, useReferenceUpdate } from "../../bible";
import BibleChapters from "./bibleChapters";
import { useNavigation } from "@react-navigation/native";

const BibleView = () => {

  const navigation = useNavigation ();

  //this passages screen can most likely use some cleanup since some constants will be redundant since the implementation of Context API
  const currentReference = useReferenceContext(); //current progress as Reference Object
  const updateReference = useReferenceUpdate(); //update current progress as Reference Object
  //const { bookID, chapterID, verseID, absoluteChapterID } = route.params; //the id's here start at 1, so -1 when using them as indices.
  const [texto, setTexto] = useState(
    getChapter(currentReference.book - 1, currentReference.chapter - 1)
  );
  const listRef = useRef(null);
  const scrollProps = { y: 0, prevHeight: 0, newHeight: 0, offset: 250 }; //take note of the item's y position and save the differences in height, offset to center-ish the verse selected
  let canScroll = true; //makes sure the screen only scrolls by itself when it has to
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
            }`
          )
        );
        setTexto(
          getChapter(currentReference.book - 1, currentReference.chapter - 1)
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
            }`
          )
        ); //update the reference from here, then call the useEffect at bibleVerses.js (soon other screens as well)
        setTexto(
          getChapter(currentReference.book - 1, currentReference.chapter - 1)
        );
        break;
    }
  };
  const renderItem = (
    { item, index } //highlights the selected verse
  ) => (
    <TouchableOpacity onPress={() => alert("tap feature soon")}>
      <Text style={styles.verse}>{index + 1}</Text>
      <Text
        style={[
          {
            ...styles.teksto,
            backgroundColor:
              index == currentReference.verse - 1 ? "#111720" : "#222831",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>

    
  );


  const onScroll = (event) => {
    //this is a tedious workaround for the flatlist scrolling by itself
    //whenever the list updates
    if (currentReference.verse == null) {
      return;
    }
    if (!canScroll || currentReference.verse == 1) return; //for some reason, the list goes way way down when the first verse is selected. this might need some checkup
    canScroll = false;
    try {
      scrollProps.y = event.nativeEvent.contentOffset.y;
      scrollProps.prevHeight = event.nativeEvent.contentSize.height;
      listRef.current.scrollToOffset({
        //since the flatlist wont render preceding items until a scroll happens,
        //we need to scroll the list first to make them render
        offset: scrollProps.prevHeight,
        animated: false,
      });
      /*i dont think this is relevant since we only need to autoscroll to render the preceding items
      listRef.current.scrollToOffset({
        offset: 0,
        animated: false,
      });*/
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };
  const sizeChanged = (width, height) => {
    //called when the list updates
    if (currentReference.verse == 1 || currentReference.verse == null) {
      return;
    } else if (currentReference.verse >= texto.VERSE.length - 1) {
      //scroll to way way down if last 2 verses
      console.log(currentReference.verse, " >= ", texto.VERSE.length - 1);
      scrollProps.newHeight = height;
      /* listRef.current.scrollToOffset({
        //after scrolling some and rendering all the items, scroll back to the verse's position
        offset: scrollProps.newHeight,
        animated: true,
      }); */
      listRef.current.scrollToIndex({
        //a better implementation of scroll to text selected
        animated: true,
        index: currentReference.verse - 1,
      });

      return;
    }
    scrollProps.newHeight = height;
    listRef.current.scrollToOffset({
      //after scrolling some and rendering all the items, scroll back to the verse's position
      offset:
        scrollProps.newHeight -
        scrollProps.prevHeight +
        scrollProps.y -
        scrollProps.offset,
      animated: true,
    });

    //canScroll = true;
  };
  //useEffect===========================================================================================>
  useEffect(() => {
    listRef.current.scrollToIndex({ animated: true, index: 0 });
  }, [currentReference]);
  //useEffect==========================================================================================/>
  return (
    
  <View style={styles.mainContainer}>

      <View style={styles.headerContainer}>
        <BibleHeader text={bookList[currentReference.book - 1].name} />
      </View>
      <BibleNavigation
        text={`Chapter ${currentReference.chapter}/${chaptersInBookId(
          currentReference.book
        )}`}
        switchFunc={switchChapter}
      />

      <FlatList
        ref={listRef}
        onScroll={onScroll}
        onContentSizeChange={sizeChanged}
        initialScrollIndex={currentReference.verse - 1}
        initialNumToRender={texto.VERSE.length}
        showsVerticalScrollIndicator={false}
        data={texto.VERSE}
        keyExtractor={(item, index) => "verse_" + index}
        renderItem={renderItem}
      />
   
    {/* An  Icon Button that will navigate to "SELECT BOOK" */}
   <TouchableOpacity onPress={() => {
    navigation.navigate("book"); }}
    style={{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      right: 30,
      bottom: 60,
    }}
  >
      <Icon  name="book" 
            size={50} 
            color='white'
       /> 
    </TouchableOpacity>
      {/* UNTIL HERE */}
  </View>

  );
};

export default BibleView;

const styles = StyleSheet.create({
  teksto: {
    padding: 25,
    fontSize: 16,

    color: "#fff",
  },
  verse: {
    fontSize: 12,
    color: "#fff",
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#222831",
  },
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
  selectChapterTxt: {
    fontSize: 25,
    fontFamily: "serif",
    color: "#000000",
    right: 20,
  },
});
