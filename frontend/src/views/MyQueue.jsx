import { Badge, Space, Card, Empty, Typography } from "antd";

const MY_NAME = "Tester 1";

const MyQueue = (props) => {
  const queueData = props.queueData;
  const myCards = queueData.find(
    (entry) => entry["user_profiles"]["name"] === MY_NAME
  );
  return (
    <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
      <Space direction="vertical" size={16}>
        {myCards ? (
          <Card
            size="small"
            title={`(${myCards["user_profiles"]?.["gender"]}) ${myCards["user_profiles"]?.["name"]}`}
            style={{ width: 300 }}
          >
            <p>
              Queue time: {new Date(myCards.queue_entry).toLocaleTimeString()}
            </p>
            <p>
              Bath time: {new Date(myCards.shower_start).toLocaleTimeString()}
            </p>
            <p>Queued for: {myCards.wait_time_minutes} minutes</p>
            <p>
              Bath for: {myCards.shower_duration_minutes || "Ongoing"} minutes
            </p>
          </Card>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <Typography.Text>You are not queueing</Typography.Text>
            }
          />
        )}
      </Space>
    </div>
  );
};

export default MyQueue;
