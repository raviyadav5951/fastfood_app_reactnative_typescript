import { images } from "@/constants"
import { memo } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import CartButton from './CartButton'

const HeaderComponent = memo(function HeaderComponent() {
  return (
    <View className="flex-row justify-between w-full py-3">
      <View>
        <Text className="font-bold text-xs text-primary">DELIVER TO</Text>
        <TouchableOpacity className="flex-row items-center gap-x-1 mt-0.5">
          <Text className="font-bold text-base text-black">Dubai, UAE</Text>
          <Image
            source={images.arrowDown}
            className="size-3"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <CartButton/>
    </View>
  )
})

export default HeaderComponent
