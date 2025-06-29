import React from "react";
import { Button, Flex } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";

const AddQueueButton = () => {
  const handleAddQueueClick = () => {
    alert("Button clicked!"); // Display a success message
    console.log("Ant Design Button was clicked!"); // Log a message to the console
  };

  return (
    <div className="app-footer">
      <Flex vertical gap="small" style={{ width: "100%" }}>
        <Button type="primary" block onClick={handleAddQueueClick}>
          + Queue
        </Button>
      </Flex>
    </div>
  );
};

export default AddQueueButton;
