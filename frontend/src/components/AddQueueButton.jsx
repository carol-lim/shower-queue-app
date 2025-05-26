import React from "react";
import { Button, Flex } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";

const AddQueueButton = () => (
  <div className="app-footer">
    <Flex vertical gap="small" style={{ width: "100%" }}>
      <Button type="primary" style={{ background: "#00cfff" }} block>
        + Queue
      </Button>
    </Flex>
  </div>
);

export default AddQueueButton;
