import { useState, useEffect } from "react"

import TopTabs from "../components/TopTabs"
import AddQueueButton from "../components/AddQueueButton"

import MyQueue from "../views/MyQueue"
import QueueList from "../views/QueueList"
import { getQueueList } from "../api"

const Home = () => {
    const [queueData, setQueueData] = useState([])

    useEffect(() => {
        const fetchQueueData = async () => {
            try {
                const data = await getQueueList()
                setQueueData(data)
            } catch (error) {
                console.error("Error fetching queue data:", error)
            }
        }

        fetchQueueData()
    }, [])
    const items = [
        {
            key: '1',
            label: 'My Queue',
            children: <MyQueue queueData={queueData}/>,
        },
        {
            key: '2',
            label: 'Queue',
            children: <QueueList queueData={queueData}/>,
        },
    ]
    return (
        <>
            <TopTabs items={items}/>
            <AddQueueButton />
        </>
    )
}

export default Home
