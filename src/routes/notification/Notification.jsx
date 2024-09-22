import React, { useEffect } from "react";
import { useGetNotificationsQuery } from "../../../redux/api/notificationApi";
import { List, Typography, Spin } from "antd";

const { Title } = Typography;

const Notification = () => {
  const { data, error, isLoading } = useGetNotificationsQuery();

  if (isLoading) return <Spin />;
  if (error) return <div>Error loading notifications.</div>;

  return (
    <div>
      <Title level={2}>Notifications</Title>
      <List dataSource={data.notifications} renderItem={(item) => <List.Item>{item.message}</List.Item>} />
    </div>
  );
};

export default Notification;
