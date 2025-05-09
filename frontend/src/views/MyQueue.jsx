import { Badge, Space, Card } from 'antd';


const MY_NAME = "Ivy Lee"

const MyQueue = (props) => {
    const queueData = props.queueData;
    const myCards = queueData.find((entry) => entry["user_profile_id.name"] === MY_NAME);
    return (
        <Space direction="vertical" size={16}>
            {myCards ? (
                <Card size="small" title={`(${myCards["user_profile_id.gender"]}) ${myCards["user_profile_id.name"]}`} style={{ width: 300 }}>
                    <p>Queue time: {new Date(myCards.queue_entry).toLocaleTimeString()}</p>
                    <p>Bath time: {new Date(myCards.shower_start).toLocaleTimeString()}</p>
                    <p>Queued for: {myCards.wait_time_minutes} minutes</p>
                    <p>Bath for: {myCards.shower_duration_minutes || "Ongoing"} minutes</p>
                </Card>
            ) : (
                <p>You're not queueing</p>
            )}
        </Space>
    )
};

export default MyQueue