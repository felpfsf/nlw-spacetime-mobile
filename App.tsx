import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-zinc-950'>
      <Text className='text-white text-4xl font-black'>
        Hello React Native!
      </Text>
      <StatusBar style='light' translucent/>
    </View>
  );
}
