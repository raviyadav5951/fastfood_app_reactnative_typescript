import { CustomInputProps } from "@/type"
import clsx from "clsx"
import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View className="w-full ">
      <Text className="label">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={"#888"}
        className={clsx(
          "input",
          isFocused ? "border-primary" : "border-gray-300"
        )}
      />
    </View>
  )
}

export default CustomInput
