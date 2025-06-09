import { Badge, Space, Card, Empty, Typography, Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const MY_NAME = "Tester 1";

const Showering = () => {
  // const queueData = props.queueData;
  // const myCards = queueData.find(
  //   (entry) => entry["user_profiles"]["name"] === MY_NAME
  // );
  /**
   * current result: "Start shower" button is working, but it's showing component instead of changing the view.
   * Desired result: Show the showering view when the button is clicked.
   * Showering view should display title "Showering", the info card and a button to stop showering.
   *
   */
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<Typography.Text>Nobody's queueing</Typography.Text>}
        />
      </Space>
    </div>
  );
};

export default Showering;
