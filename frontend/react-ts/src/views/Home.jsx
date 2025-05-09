import TopTabs from "../components/TopTabs"

import MyQueue from "../views/MyQueue"
import QueueList from "../views/QueueList"

const Home = () => {
    const items = [
        {
            key: '1',
            label: 'My Queue',
            children: <MyQueue />,
        },
        {
            key: '2',
            label: 'Queue',
            children: <QueueList />,
        },
    ]
    return (
        <TopTabs items={items}/>
    )
}

export default Home
