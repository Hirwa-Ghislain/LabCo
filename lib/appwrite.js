import { Client,Account,ID, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.app.aora',
    projectId: '67c00d29003c4a7a5d20',
    databaseId: '67c00f58002482959140',
    userCollectionId: '67c00f940029117ae488',
    videoCollectionId: '67c011bc00037f3cc952',
    storageId:'67c016be0022b285ff31'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async(email,password,username) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error

        const avatarUrl = avatars.getInitials(username)

        await signIn(email,password)
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar:avatarUrl

            }
        )
        return newUser
    } catch (error){
        console.log(error)
        throw new Error(error)
    }
}

export async function signIn(email,password) {
    try {
        const session = await account.createEmailPasswordSession(email,password)
        return session
    } catch (error) {
        throw new Error(error)
    }
    
}