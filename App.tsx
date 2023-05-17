import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { BaiJamjuree_700Bold, useFonts } from "@expo-google-fonts/bai-jamjuree";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { styled } from "nativewind";
import NLWLogo from "./src/assets/logo.svg";
import blurBG from "./src/assets/luz.png";
import Stripes from "./src/assets/stripes.svg";

const StyledStripes = styled(Stripes);
const StyledNLWLogo = styled(NLWLogo);

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });
  if (!hasLoadedFonts) {
    return null;
  }
  return (
    <ImageBackground
      source={blurBG}
      className='flex-1 relative items-center bg-gray-900 px-8 py-10'
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className='absolute left-2' />
      <View className='flex-1 items-center justify-center gap-6'>
        <StyledNLWLogo />
        <View className='space-y-2'>
          <Text className='text-gray-50 font-title text-2xl text-center leading-tight'>
            Sua cápsula do tempo
          </Text>
          <Text className='text-gray-100 font-body text-center text-base leading-relaxed'>
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          className='py-2 px-5 bg-green-500 rounded-full'
          activeOpacity={0.7}
        >
          <Text className='text-black text-sm font-alt uppercase'>
            COMEÇAR A CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>
      <Text className='text-gray-200 text-sm text-center font-body leading-relaxed'>
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <StatusBar style='light' translucent />
    </ImageBackground>
  );
}
