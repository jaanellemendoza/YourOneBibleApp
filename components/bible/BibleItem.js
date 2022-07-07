import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  InteractionManager,
  Pressable,
  setTimesPressed
} from "react-native";
import React ,{useState}from "react";
import { useNavigation } from "@react-navigation/native";
import Reference, { bookNameFromId } from "biblejs/lib/reference";
import { useReferenceUpdate } from "./BibleContexts";
import { TouchableHighlight } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
//Bible item is each of the individual items(such as books, chapters, and verses) to be listed in the bible api

const width = Dimensions.get("screen").width;
const BibleItem = ({ item, book, chapter }) => {
  const nav = useNavigation();
  const updateReference = useReferenceUpdate();
  let ref = null;
  //When an item is selected, check its type then do stuff accordinglys

  const [color, setColor] = useState(false);
  // const [timePressed ,setTimePressed ] =useState()
   const changeColor = () =>
   {
     if((item?.type == "chapter" || item?.type == "verse")){
      setColor(true);
     }else{
       setColor(false);
     }
   }

  
  const itemSelected = (id, itemType) => {
    switch (itemType) {
      case "book": //itemID in this context is the book's ID
        updateReference(new Reference(`${bookNameFromId(id)} 1`));
        nav.navigate("chapters");
        break;
      case "chapter": //itemID in this context is the chapter's ID, but the current chapterID is relative to its book,
        //not the entire bible
        //to fix this, we get the chapterID for the selected chapter using the book prop
        updateReference(new Reference(`${book} ${id}`));
        //console.log(book);
        nav.navigate("verses");
        break;
      case "verse": //itemID in this context is the verse's ID relative to the chapter, same conversion from the chapter case
        //alert(`Verse selected: ${id}`);
        updateReference(
          new Reference(
            `${Reference.bookNameFromId(book)} ${
              Reference.fromChapterId(chapter).chapter
            }:${id}`
          )
        );

        nav.navigate("passages");
        break;
    }
  };


  return (
    //Gets the id of the book then pass it to bookSelected function
    <View style={styles.motherView}>
      <Pressable
        onPress={() =>itemSelected(item.id, item.type) }
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : '#222831',
              borderRadius:5,
          },styles.item]}

        >
        {/*Only books have names so unless it's a book type, render its id*/}
        {item?.type == "book" && (
          <View style={styles.textSpace}>
            <Text  style={styles.text1}>{item?.name} </Text>

            <Text style={styles.chapterIndicator}>
              {" "}
              {
                /*pede mo ikulong yung chapters part sa isa pang Text component*/

                Reference.chaptersInBookId(item.id)
              }{" "}
              Chapter{Reference.chaptersInBookId(item.id) != 1 && "s"}
            </Text>
          </View>
        )}
        
        
        {(item?.type == "chapter" || item?.type == "verse") && (

        // Dito nag edit ng Pag change ng Color once click to another xml
          
        <View style={{...styles.seperator}}> 
          
       <Text style={styles.text}> {item.id} </Text>        
        </View>
  
        )}
        {/* this will contain the code for the texts soon */}
        {/* this will contain the code for the texts soon */}
      </Pressable>
    </View>
    
  );
};


export default BibleItem;

const styles = StyleSheet.create({
  motherView: {
    padding: 12,
    alignContent:'center',
   
  },
  item:{
    textAlign:'center',
    color: 'white',
  },
  text1: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "sans-serif-condensed",
  },
  chapterIndicator: {
    color: "#fff",
    fontSize: 20,
    top: 6,
    fontFamily: "sans-serif-condensed",
  },
  textSpace: {
    width: width - 65,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "sans-serif-condensed",
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    top:11,
  },

  seperator: {
    borderWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: "center",
    
    
  
   
  },

  
  
  
});
