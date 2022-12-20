import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from '../sanity';


const HomeScreen = () => {
  //create custom header
  const navigation = useNavigation(); //use the navigation hook
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    //as soon as screen is loaded, run the effect
    navigation.setOptions({
      headerShown: false,
    });
  }, []); //store the effect in an array

  //Used when the component loads
  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }
  `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  

  return (
    //Define safe area view
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>

          {/* User icon */}
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>
      {/* Body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          title="Featured"
          id="12"
          description="Paid Placements from our partners"
          featuredCategory="featured"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          title="Tasty Discounts"
          id="123"
          description="Everyone's been enjoying these juicy discounts"
          featuredCategory="discounts"
        />

        {/* Offers near you */}
        <FeaturedRow
          title="Offers near you"
          id="1234"
          description="Why not support your local restaurant tonight"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
