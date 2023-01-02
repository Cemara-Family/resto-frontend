import React from "react";
import { useState } from "react";
import bg from "../images/Background/bg2.jpg";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="62">+62</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${bg})` }}>
      <div style={{ border: "1px solid gray", padding: "2%", width: "70%", borderRadius: "1rem", boxShadow: "1px 2px 9px gray", backgroundColor: "white", opacity: "95%" }}>
        <h4 style={{ textAlign: "center" }}>HALAMAN REGISTRASI</h4>
        {/* <Form style={{ marginTop: "4rem" }}>
          <Row className="mb-3" style={{}}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1" style={{}}>
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control placeholder="Masukkan Nama Lengkap" />
          </Form.Group>

          <fieldset>
            <Form.Group className="mb-3" style={{}}>
              <Form.Label as="legend" style={{ fontSize: 16 }}>
                Jenis Kelamin
              </Form.Label>
              <Col sm={10} style={{ display: "flex" }}>
                <Form.Check type="radio" label="Laki-Laki" name="formHorizontalRadios" id="formHorizontalRadios1" />
                <Form.Check type="radio" label=" Perempuan" name="formHorizontalRadios" id="formHorizontalRadios2" style={{ marginLeft: "2rem" }} />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group className="mb-3" controlId="formGridAddress2" style={{}}>
            <Form.Label>Alamat</Form.Label>
            <Form.Control placeholder="Masukan Alamat" />
          </Form.Group>

          <Row className="mb-3" style={{}}>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Tanggal Lahir </Form.Label>
              <Form.Control placeholder="Tanggal Lahir" type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. Telephone</Form.Label>
              <Form.Control placeholder="No.telephone" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Pembeli</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox" style={{}}>
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" href="/" type="submit " style={{}}>
            Submit
          </Button>
        </Form> */}
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '62',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{width:"100%"}}>
          Register
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default Register;
