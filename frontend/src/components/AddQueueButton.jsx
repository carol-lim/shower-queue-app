import React from "react";
import { Button, Flex } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import { addUserToQueue } from "../controller/userController.ts";

const MY_ID = "1";

const AddQueueButton = () => {
  const handleAddQueueClick = () => {
    addUserToQueue(MY_ID);
    alert("Added userProfileID " + MY_ID + " to queue."); // Display a success message
    console.log("Added userProfileID " + MY_ID + " to queue."); // Log a message to the console
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
