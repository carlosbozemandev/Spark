import React, { useState, useEffect } from "react";

import { Button, Col, Divider, Form, Input, Row } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { HiOutlineLockClosed, HiOutlineEnvelope } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";

// import Button from "../../shared/Form/Button";
import styles from "../../../styles/components/Layout/Auth/auth.module.scss";
// import { UserLoginAuth } from "@/src/utils/api/auth";

// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../../redux/userActions/userActions";
import { Typography } from "antd";
import { Avatar, Space } from "antd";
const { Title } = Typography;

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  //   const dispatch = useDispatch()

  //   const OnSubmitAuth=async(state)=>{
  //     e.preventDefault()
  //     const userAuthResponse =await UserLoginAuth(state)
  //     if (userAuthResponse?.error==null) {
  //       console.log(userAuthResponse)
  //       setLoading(false);
  //       const jwtToken = userAuthResponse?.token
  //       console.log(jwtToken)
  //       const token: any = jwt_decode(jwtToken);
  //       Cookies.set("_hjSession", jwtToken, { expires: 1 });
  //       Cookies.set('_user',JSON.stringify(userAuthResponse?.payload), { expires: 1 })
  //       dispatch(loginSuccess(token, token.type));
  //       Router.push("/");

  //     }
  //      if (userAuthResponse?.error != null) {
  //       setLoading(false);
  //       setMessage("Invalid email or password!");
  //     }
  //   }
  //   console.log(message)
  // onSubmit={(e:any)=>{OnSubmitAuth(state, e)}}
  return (
    <Row className={styles.auth_LoginContainer} justify={"center"}>
      <Col span={15} className={styles.auth_ContainerCol}>
        <Title className={styles.auth_LoginHeading}>Sign in to Account</Title>
        <Divider></Divider>
        <Space size={16} wrap>
          <Avatar
            size={"large"}
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          >
            <FcGoogle fontSize={35} style={{ marginTop: 6 }} />
          </Avatar>
          <Avatar
            size={"large"}
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          >
            <FaLinkedin fontSize={28} style={{ marginTop: 6 }} />
          </Avatar>
        </Space>
        <span style={{ marginTop: 150 }}>
          <p>or use your email account.</p>
        </span>
        <Space className={styles.auth_LoginCard}>
          <Form className={styles.auth_LoginForm}>
            <Input
              placeholder="Email"
              size="large"
              prefix={<HiOutlineEnvelope />}
              className={styles.auth_LoginInputs}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
            <Input
              placeholder="Password"
              size="large"
              prefix={<HiOutlineLockClosed />}
              className={styles.auth_LoginInputs}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <span className={styles.auth_LoginFormBottomLine}>
              <p>Forgot password?</p>
            </span>
            <Button className={styles.auth_LoginButton} size="large">
              Sign In
            </Button>
            <div className={styles.auth_BottomText}>
              Privacy Policy - Terms & Conditions
            </div>
          </Form>
        </Space>
      </Col>
      <Col span={9} className={styles.auth_ContainerSecondCol}>
        <div>
          <Title className={styles.auth_ColHeading}>Get More Leads!</Title>
          <Space>
            <Typography className={styles.auth_Punchline}>
            Join now! Grow your business and deliver premium quality work
            </Typography>
          </Space>
          <Button className={styles.auth_RegisterButton} size="large">
              Sign Up
            </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
