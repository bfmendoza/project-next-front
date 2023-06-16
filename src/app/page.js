"use client"
import { Button, Form, Input } from 'antd'
import style from './page.module.css'
import axios from 'axios'


export default function Home() {

  const onFinish = async (values) => {
    const prueba = await axios.post("/api/auth");
    /*const { data } = await axios.post('https://bfmendoza-special-space-waddle-g9wqpwp95j9hw5v9-3000.preview.app.github.dev/auth/signin', values, {
      headers: {
          'Access-Control-Allow-Methods': '*',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
  })*/

    console.log(prueba)
  }

  return (
    <div className={style.container}>
    <Form onFinish={onFinish} className={style.loginForm}>
      <Form.Item name="email" rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}>
        <Input placeholder="Email"/>
      </Form.Item>
      <Form.Item name="password">
        <Input type='password' placeholder="Password"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={style.loginFormButton}>
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
