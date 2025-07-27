import { CreateUserParams, SignInParams } from '@/type'
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite'

export const appWriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform: "in.raviyadav.foodapp_rn",
    databaseId: "6879324600089c233a00",
    userCollectionId: "68793273003658c38cae",
}

export const client = new Client()

client
    .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.project) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID

export const account = new Account(client)
export const database = new Databases(client)
export const avatars = new Avatars(client)

// Register a user

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        )
        if (!newAccount) {
            throw new Error("User creation failed")
        }

        await signIn({ email, password })

        const userAvatar = avatars.getInitialsURL(name)

        const newUserInDB = database.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                name,
                avatar: userAvatar,
            }
        )
        return newUserInDB

    } catch (error) {
        console.log(error)

        throw new Error(error as string)
    }
}

export const signIn = async ({ email, password }: SignInParams) => {

    try {
        const session = await account.createEmailPasswordSession(email, password)
        if (!session) {
            throw new Error("Login failed")
        }
        return session
    } catch (error) {
        throw new Error(error as string)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) {
            throw new Error("User not found")
        }
        const currentUser = await database.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        )
        if (!currentUser) {
            throw new Error("User not found in database")
        }

        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
}