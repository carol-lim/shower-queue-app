import React from 'react';
import { Button, Flex } from 'antd';

const AddQueueButton = () => (
  <div className="app-footer">
    <Flex vertical gap="small" style={{ width: '100%' }}>
      <Button type="primary" block>
        +
      </Button>
    </Flex>
  </div>
);

export default AddQueueButton;