import { images } from "@/constants"
import { Slot } from "expo-router"
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native"

const _Layout = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        className="h-full bg-white"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("window").height / 2.25 }}
        >
          <ImageBackground
            source={images.loginGraphic}
            className="w-full h-full"
            resizeMode="cover"
          />
          <Image
            source={images.logo}
            className="self-center size-48 absolute -bottom-16 z-10"
          />
        </View>

        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default _Layout
