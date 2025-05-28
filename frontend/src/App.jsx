import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Tabs,
  Badge,
  Space,
  Button,
  Card,
  Empty,
  Typography,
  message,
  Alert,
  Flex,
  ConfigProvider,
} from "antd";
import { EditOutlined, RedoOutlined, DeleteOutlined } from "@ant-design/icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./App.css";

import Splash from "./views/Splash";
import Home from "./views/Home";

const { Meta } = Card;
const QueueCard = () => (
  <Card
    style={{ width: 300 }}
    title="John Doe"
    extra={
      <Button type="primary" danger>
        Start shower
      </Button>
    }
    actions={[
      <DeleteOutlined key="delete" />,
      <RedoOutlined key="redo" />,
      <EditOutlined key="edit" />,
    ]}
  >
    <p>Queue time: 0830</p>
    <p>Queued for: 1 hour</p>
  </Card>
);

const EmptyList = () => (
  <Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}
    description={<Typography.Text>Nobody's queueing</Typography.Text>}
  />
);

const ShowMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};

let profileName = "Lily";
const AlertNext = () => (
  <>
    <Alert
      message={`${profileName}, next is your turn!`}
      description="Prepare your clothes and towels and wait near the bathroom."
      type="warning"
    />
  </>
);

const AlertNow = () => (
  <>
    <div>
      <Alert
        message={`${profileName}, now is your turn!`}
        description="Take your clothes and towels and go bath."
        type="error"
      />
    </div>

    <div>
      <Alert
        description="Automatically re-queue after 1 minute countdown."
        type="error"
      />
    </div>
  </>
);

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={60}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

const App = () => (
  <Router>
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00cfff",
          },
        }}
      >
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/queue/:id" element={<QueueCard />} /> */}
        </Routes>
        {/* <TopTabs /> */}
        {/* <EmptyList />
        <ShowMessage />
        <AlertNext />
        <AlertNow />
        <UrgeWithPleasureComponent />
        <AddQueueButton /> */}
      </ConfigProvider>
    </div>
  </Router>
);

export default App;
