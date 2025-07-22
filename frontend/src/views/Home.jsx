import { useState, useEffect } from "react";

import TopTabs from "../components/TopTabs";
import AddQueueButton from "../components/AddQueueButton";

import MyQueue from "../views/MyQueue";
import QueueList from "../views/QueueList";
import { getQueue } from "../api";

const Home = () => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const data = await getQueue();
        setQueue(data);
      } catch (error) {
        console.error("Error fetching queue data:", error);
      }
    };

    fetchQueue();
  }, []);
  const items = [
    {
      key: "1",
      label: "My Queue",
      children: <MyQueue queue={queue} />,
    },
    {
      key: "2",
      label: "Queue",
      children: <QueueList queue={queue} />,
    },
  ];
  return (
    <div className="app-container">
      <TopTabs items={items} />
      <AddQueueButton />
    </div>
  );
};

export default Home;
