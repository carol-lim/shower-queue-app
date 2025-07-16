import { getQueueList, addToQueue } from '../api/index.js';

// Controller function to get user's queue data with error handling
export const getUserQueueData = async (userName: string) => {
  try {
    const queueList = await getQueueList()
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
    console.error('Error in getUserQueueData:', error)
    return null // or throw error if you want to handle it elsewhere
  }
}

// Controller function to add user to queue with error handling
export const addUserToQueue = async (userProfileId: string) => {
  try {
    if (!userProfileId) {
      throw new Error('User profile ID is required')
    }
    const result = await addToQueue(userProfileId)
    // Business logic: check if result is valid
    if (!result || result.length === 0) {
      throw new Error('Failed to add user to queue')
    }
    return result
  } catch (error) {
    console.error('Error in addUserToQueue:', error)
    return null // or throw error if you want to handle it elsewhere
  }
}