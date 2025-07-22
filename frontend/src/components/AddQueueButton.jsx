import React from "react";
import { Button, Flex } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import { addQueueByUserProfileId } from "../controller/userController.ts";

const currentUserProfileId = "1";

const AddQueueButton = () => {
  const handleAddQueueClick = () => {
    addQueueByUserProfileId(currentUserProfileId);
    alert("Added userProfileID " + currentUserProfileId + " to queue."); // Display a success message
    console.log("Added userProfileID " + currentUserProfileId + " to queue."); // Log a message to the console
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
