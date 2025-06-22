import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";

const onChange = (key) => {
  console.log(`Selected tab: ${key}`);
};

const TopTabs = (props) => {
  const items = props.items;
  console.log("TopTabs items: ", items);
  return (
    <div>
      <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
    </div>
  );
};

export default TopTabs;
