import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
const HomeScreen = () => {
  //create custom header
  const navigation = useNavigation(); //use the navigation hook

  useLayoutEffect(() => {
    //as soon as screen is loaded, run the effect
    navigation.setOptions({
      headerShown: false,
    });
  }, []); //store the effect in an array

  return (
    //Define safe area view
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>

          {/* User icon */}
        </View>
        <UserIcon size={35} color='#00CCBB'/>
      </View>
      <View>
        <View>
            <SearchIcon/>
            <TextInput/>
        </View>
        <View>
            <AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
