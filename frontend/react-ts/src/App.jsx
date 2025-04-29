import React from 'react';
import { Tabs, Badge, Space, Button, Card, Empty, Typography, message, Alert, Flex } from 'antd';
import { EditOutlined, RedoOutlined, DeleteOutlined } from '@ant-design/icons';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import "./App.css"

function Splash() {
  return (
    <>
      <h1>ShowerQ</h1>
      <h4>Huh?! You haven't taken a shower yet?</h4>
    </>
  );
}

const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'My Queue',
    children: 'Content of My Queue',
  },
  {
    key: '2',
    label: 'Queue',
    children: 'Content of Queue',
  },
];
const TopTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;


const Cards = () => (
  <Space direction="vertical" size={16}>
    <h2>Who's showering?</h2>
    <Card size="small" title="John Doe" /*extra={<a href="#">More</a>}*/ style={{ width: 300 }}>
      <p>Queue time: 0830</p>
      <p>Bath time: 0930</p>
      <p>Queued for: 1 hour</p>
      <p>Bath for: 3 minutes</p>
    </Card>

    <h2>Who're queueing? <Badge count="24" /></h2>
    <Card size="small" title="John Doe" style={{ width: 300 }}>
      <p>Queue time: 0830</p>
      <p>Queued for: 1 hour</p>
    </Card>
  </Space>
);

const { Meta } = Card;
const QueueCard = () => (
  <Card
    style={{ width: 300 }} title="John Doe" extra={ <Button type="primary" danger>
      Start shower
    </Button>}
     
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

const EmptyList = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} 
description={
  <Typography.Text>
    Nobody's queueing 
  </Typography.Text>
}/>;

const ShowMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
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


let profileName = "Lily"
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
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)

const AddQueueButton = () => (
  <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" block>
      +
    </Button>
  </Flex>
);

export default AddQueueButton;