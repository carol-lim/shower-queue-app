import { Badge, Space, Card, Empty, Typography, Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MY_NAME = "Tester 1";

const Showering = () => {
  // const queue = props.queue;
  // const myCards = queue.find(
  //   (entry) => entry["user_profiles"]["name"] === MY_NAME
  // );
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Space direction="vertical" size="middle" className="center-vertically">
        <Card
          size="small"
          title="Tester 1"
          extra={
            <Button type="primary" danger onClick={() => navigate("/home")}>
              Done shower
            </Button>
          }
          actions={[<DeleteOutlined key="delete" />]}
        >
          <p>Queue time:</p>
          <p>Bath time:</p>
          <p>Queued for:</p>
          <p>Bath for:</p>
        </Card>
      </Space>
    </div>
  );
};

export default Showering;
