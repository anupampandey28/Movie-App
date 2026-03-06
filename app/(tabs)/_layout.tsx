import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const _layout = () => {
  const tabs = [
    { name: "index", title: "Home", icon: "home" },
    { name: "search", title: "Search", icon: "search" },
    { name: "saved", title: "Saved", icon: "bookmark" },
    { name: "profile", title: "Profile", icon: "person-circle" },
  ];

  type TabIconProps = {
    focused: boolean;
    name: string;
    icon: string;
  };

  const TabIcon = ({ focused, name, icon }: TabIconProps) => {
    return (
      <View
        className={`justify-center flex-row , w-full min-h-16 min-w-32 rounded-full items-center  ${
          focused ? "bg-purple-400" : ""
        }`}
      >
        <Ionicons
          name={focused ? icon : `${icon}-outline`}
          size={focused ? 26 : 30}
          color={focused ? "#151312" : "#A8B5DB"}
        />

        {focused && (
          <Text className="text-secondary mt-1 ml-3 font-semibold text-sm">
            {name}
          </Text>
        )}
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          flexDirection: "row",
          top:13,
          borderRadius: 50,
        },
        tabBarStyle: {
          height:65,
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          alignItems: "center",
          position: "absolute",
          marginBottom: 25,
          marginHorizontal:10,
          paddingHorizontal:20,
          borderWidth:1,
          borderColor:"#0F0D23",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                name={tab.title}
                icon={tab.icon as keyof typeof Ionicons.glyphMap}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _layout;
