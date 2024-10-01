import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { usePostApi } from "../hooks/usePostApi";

export const Parsing = () => {
  const [cpuPath, setCpuPath] = useState("");
  const [exoPath, setExoPath] = useState("");

  const { data, error, isLoading, postData } = usePostApi(
    `${process.env.REACT_APP_BASE_URL}/api/parsing/`
  );

  const handleSubmit = () => {
    postData({
      cpu_path: cpuPath,
      exo_path: exoPath,
    });
  };

  return (
    <div className="mt-[50px]">
      <Form
        name="pathForm"
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <Form.Item
          label="CPU Path"
          name="cpuPath"
          rules={[{ required: true, message: "Please input the CPU Path!" }]}
        >
          <Input
            placeholder="Enter CPU Path"
            value={cpuPath}
            onChange={(e) => setCpuPath(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="MemInfo Path"
          name="exoPath"
          rules={[{ required: true, message: "Please input the Exo Path!" }]}
        >
          <Input
            placeholder="Enter Exo Path"
            value={exoPath}
            onChange={(e) => setExoPath(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
