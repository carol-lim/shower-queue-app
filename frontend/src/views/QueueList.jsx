import { Badge, Space, Card, Empty, Typography } from "antd";

const QueueList = (props) => {
  const queue = props.queue;
  const showering = queue.find((entry) => entry["status"] === "showering");
  const waiting = queue.filter((entry) => entry["status"] === "waiting");
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <h2>Who's showering?</h2>
        {showering ? (
          <Card
            size="small"
            title={`(${showering["user_profiles"]?.["gender"]}) ${showering["user_profiles"]?.["name"]}`}
            style={{ width: 300 }}
          >
            <p>
              Queue time: {new Date(showering.queue_entry).toLocaleTimeString()}
            </p>
            <p>
              Bath time: {new Date(showering.shower_start).toLocaleTimeString()}
            </p>
            <p>Queued for: {showering.wait_time_minutes} minutes</p>
            <p>
              Bath for: {showering.shower_duration_minutes || "Ongoing"} minutes
            </p>
          </Card>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <Typography.Text>Nobody is showering now.</Typography.Text>
            }
          />
        )}

        <h2>
          Who're queueing? <Badge count={waiting.length} />
        </h2>
        {waiting.length > 0 ? (
          waiting.map((entry) => (
            <Card
              key={entry.id}
              size="small"
              title={`(${entry["user_profiles"]?.["gender"]}) ${entry["user_profiles"]?.["name"]}`}
            >
              <p>
                Queue time: {new Date(entry.queue_entry).toLocaleTimeString()}
              </p>
              <p>
                Queued for: {entry.wait_time_minutes || "Calculating..."}{" "}
                minutes
              </p>
            </Card>
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <Typography.Text>Nobody is queueing now.</Typography.Text>
            }
          />
        )}
      </Space>
    </div>
  );
};

export default QueueList;
