import CustomButton from "@/components/CustomButton"
import CustomInput from "@/components/CustomInput"
import { signIn } from '@/lib/app_write'
import { Link, router } from "expo-router"
import React, { useState } from "react"
import { Alert, Text, View } from "react-native"

const SignIn = () => {
  const [isSubmiting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Please enter valid email and password")
      return
    }
    setIsSubmitting(true)
    try {
      // Call Appwrite signin API here
      await signIn({
        email: form.email,
        password: form.password,
      })
      Alert.alert("Login successful", "You are now logged in")
      router.replace("/")
    } catch (error: any) {
      Alert.alert("Login failed", error?.message || "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <View className="gap-10 bg-white rounded-lg p-4 mt-5">
      <CustomInput
        placeholder="Enter email address"
        value={form.email}
        label="Email"
        keyboardType="email-address"
        secureTextEntry={false}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }))
        }}
      />
      <CustomInput
        placeholder="Enter password"
        value={form.password}
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }))
        }}
      />

      <CustomButton title="Login" onPress={submit} isLoading={isSubmiting} />

      <View className="flex-row flex justify-center mt-4 gap-2">
        <Text className="base-regular text-center text-gray-100">
          Dont have an account?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary px-2 ">
          Signup
        </Link>
      </View>
    </View>
  )
}

export default SignIn
