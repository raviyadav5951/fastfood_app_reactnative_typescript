import CustomButton from "@/components/CustomButton"
import CustomInput from "@/components/CustomInput"
import { createUser } from "@/lib/app_write"
import { Link, router } from "expo-router"
import React, { useState } from "react"
import { Alert, Text, View } from "react-native"

const SignUp = () => {
  const [isSubmiting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const submit = async () => {
    const { name, email, password } = form

    if (!name || !email || !password) {
      Alert.alert("Please enter valid name,email and password")
      return
    }

    setIsSubmitting(true)
    try {
      // Call Appwrite signup API here
      await createUser({
        name: name,
        email: email,
        password: password,
      })

      router.replace("/")
    } catch (error: any) {
      console.log(error);
      
      Alert.alert("Signup failed", error?.message || "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <View className="gap-10 bg-white rounded-lg p-4 mt-5">
      <CustomInput
        placeholder="Enter full name"
        value={form.name}
        label="Name"
        keyboardType="default"
        secureTextEntry={false}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, name: text }))
        }}
      />

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

      <CustomButton title="Signup" onPress={submit} isLoading={isSubmiting} />

      <View className="flex-row flex justify-center mt-4 gap-2">
        <Text className="base-regular text-center text-gray-100">
          Already have an account?
        </Text>

        <Link href="/sign-in" className="base-bold text-primary px-2">
          Signin
        </Link>
      </View>
    </View>
  )
}

export default SignUp
