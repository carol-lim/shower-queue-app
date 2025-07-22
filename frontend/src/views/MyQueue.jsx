import { Space, Card, Empty, Typography, Button } from "antd";
import { EditOutlined, RedoOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const currentUserProfileName = "William";

const MyQueue = (props) => {
  const queue = props.queue;
  const currentUserProfileQueue = queue.find(
    (entry) => entry["user_profiles"]["name"] === currentUserProfileName
  );
  const navigate = useNavigate();

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {currentUserProfileQueue ? (
          <Card
            size="small"
            title={`(${currentUserProfileQueue["user_profiles"]?.["gender"]}) ${currentUserProfileQueue["user_profiles"]?.["name"]}`}
            extra={
              <Button
                type="primary"
                danger
                onClick={() => navigate("/showering")}
              >
                Start shower
              </Button>
            }
            actions={[
              <DeleteOutlined key="delete" />,
              <RedoOutlined key="redo" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <p>
              Queue time:{" "}
              {new Date(
                currentUserProfileQueue.queue_entry
              ).toLocaleTimeString()}
            </p>
            {/* <p>
              Bath time: {new Date(myCards.shower_start).toLocaleTimeString()}
            </p> */}
            <p>
              Queued for: {currentUserProfileQueue.wait_time_minutes} minutes
            </p>
            {/* <p>
              Bath for: {myCards.shower_duration_minutes || "Ongoing"} minutes
            </p> */}
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
