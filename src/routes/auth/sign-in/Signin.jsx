import React, { useEffect } from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSignInRequestMutation } from "../../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { sigIn } from "../../../redux/slices/authSlice";

const { Title, Text } = Typography;

const Signin = () => {
  const [signInRequest, { data, isSuccess }] = useSignInRequestMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    signInRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.payload.accessToken);
      dispatch(sigIn(data.payload.accessToken));
      navigate(`/`);
    }
  }, [isSuccess, data, navigate, dispatch]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="auth-container">
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={1}>Sign in</Title>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
        <Text>
          Don't have an account? <Link to="/auth/sign-up">Sign Up</Link>
        </Text>
      </Form>
    </div>
  );
};

export default Signin;
