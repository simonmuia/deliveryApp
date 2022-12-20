import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ title, imgUrl }) => {
  return (
    // TouchableOpacity applies clickable effect
    <TouchableOpacity className="relative mr-2">
      <Image
        style={{ width: 80, height: 80 }}
        source={{
          uri: imgUrl,
        }}
        className="rounded"
      />
      <Text className="absolute bottom-1 lef-1 text-white font-bold">
       
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
