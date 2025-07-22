import { getQueue, addQueueByUserProfileId } from '../api/index.js';

// Controller function to get user's queue data with error handling
export const getQueueByName = async (userName: string) => {
  try {
    const queueList = await getQueue()
    if (!queueList || !Array.isArray(queueList)) {
      throw new Error('Queue data is not available')
    }
    const userEntry = queueList.find(
      (entry: any) => entry.user_profiles?.name === userName
    )
    if (!userEntry) {
      throw new Error('User not found in queue')
    }
    // Business logic: you could add more checks or data formatting here
    return userEntry
  } catch (error) {
    console.error('Error in getQueueByName:', error)
    return null // or throw error if you want to handle it elsewhere
  }
}

// Controller function to add user to queue with error handling
export const addQueueByUserProfileId = async (userProfileId: string) => {
  try {
    if (!userProfileId) {
      throw new Error('User profile ID is required')
    }
    const result = await addQueueByUserProfileId(userProfileId)
    // Business logic: check if result is valid
    if (!result || result.length === 0) {
      throw new Error('Failed to add user to queue')
    }
    return result
  } catch (error) {
    console.error('Error in addQueueByUserProfileId:', error)
    return null // or throw error if you want to handle it elsewhere
  }
}