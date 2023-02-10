import { View, Text } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  const animation = useRef(null);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("../../assets/final.json")}
      />
    </View>
  );
};

export default Loader;
