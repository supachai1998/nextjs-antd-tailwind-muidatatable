import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Slider,
  Button,
  Layout,
  Card,
  Typography,
  Divider,
  Tooltip,
} from "antd";

const { Option } = Select;
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};
const tailLayout = {
  wrapperCol: { offset: 16, span: 8 },
};

export default function Home() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Card className="h-auto my-5">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item label="ชื่อ">
          <Input.Group compact>
            <Form.Item
              name="คำนำ"
              label="คำนำ"
              rules={[
                { required: true, message: "กรอกคำนำ" },
                { min: 3, message: "ขั้นต่ำ 3 ตัวอักษร" },
                { max: 50, message: "สูงสุด 50 ตัวอักษร" },
              ]}
            >
              <Select placeholder="คำนำหน้า" allowClear>
                {["นาย", "นาง", "นางสาว"].map((val) => (
                  <Option key={val} value={val}>
                    {val}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="ชื่อ"
              label="ชื่อ"
              rules={[
                { required: true, message: "กรอกชื่อ" },
                { min: 2, message: "ขั้นต่ำ 2 ตัวอักษร" },
                { max: 50, message: "สูงสุด 50 ตัวอักษร" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="นามสกุล"
              label="นามสกุล"
              rules={[
                { required: true, message: "กรอกนามสกุล" },
                { min: 2, message: "ขั้นต่ำ 2 ตัวอักษร" },
                { max: 50, message: "สูงสุด 50 ตัวอักษร" },
              ]}
            >
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          name="อีเมล"
          label="อีเมล"
          rules={[
            { required: true, message: "กรอกอีเมล" },
            { type: "email", message: "รูปแบบของ อีเมล ไม่ถูกต้อง" },
            { min: 5, message: "ขั้นต่ำ 5 ตัวอักษร" },
            { max: 50, message: "สูงสุด 50 ตัวอักษร" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout} className="flex justify-end">
          <Button htmlType="button" onClick={onReset}>
            ล้างค่า
          </Button>
          <Button type="primary" htmlType="submit">
            ตกลง
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
