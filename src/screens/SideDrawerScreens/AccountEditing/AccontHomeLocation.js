import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

const AccontHomeLocation = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0DADA" }}>
      {/* <View>{LanguagesNames()}</View> */}
      <View
        style={{
          width: "100%",

          alignItems: "center",
          // position: "absolute",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccontHomeLocation;
