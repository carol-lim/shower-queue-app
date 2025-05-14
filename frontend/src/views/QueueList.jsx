import { Badge, Space, Card } from 'antd';



const QueueList = (props) => {
    const queueData = props.queueData;
    const showering = queueData.find((entry) => entry["status"] === "showering");
    const waiting = queueData.filter((entry) => entry["status"] === "waiting");
    return (
        <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <Space direction="vertical" size={16}>
                <h2>Who's showering?</h2>
                {showering ? (
                    <Card size="small" title={`(${showering["user_profiles"]?.["gender"]}) ${showering["user_profiles"]?.["name"]}`} style={{ width: 300 }}>
                        <p>Queue time: {new Date(showering.queue_entry).toLocaleTimeString()}</p>
                        <p>Bath time: {new Date(showering.shower_start).toLocaleTimeString()}</p>
                        <p>Queued for: {showering.wait_time_minutes} minutes</p>
                        <p>Bath for: {showering.shower_duration_minutes || "Ongoing"} minutes</p>
                    </Card>
                ) : (
                    <p>No one is showering right now.</p>
                )}

                <h2>Who're queueing? <Badge count={waiting.length} /></h2>
                {waiting.map((entry) => (
                    <Card key={entry.id} size="small" title={`(${entry["user_profiles"]?.["gender"]}) ${entry["user_profiles"]?.["name"]}`} style={{ width: 300 }}>
                        <p>Queue time: {new Date(entry.queue_entry).toLocaleTimeString()}</p>
                        <p>Queued for: {entry.wait_time_minutes || "Calculating..."} minutes</p>
                    </Card>
                ))}
            </Space>
        </div>
    )
};

export default QueueList