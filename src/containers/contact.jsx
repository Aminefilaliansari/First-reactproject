import { Row, Col, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const checkPhone = (_, value) => {
    if (!value) {
        return Promise.reject(new Error("le numéro de telephone est obligatoire"));
    }
    if (value.length !== 9) {
        return Promise.reject(new Error("le numéro de telephone est invalide"));
    }

    return Promise.resolve();
};

export default function Contact() {
    const navigate = useNavigate();

    const handleFinish = (values) => {
        console.log("Received values of form: ", values);
        message.success("le formulaire est validé");
        navigate(`/thanks?name=${values.username}`);
    };

    return (
        <>
            <h1 className="text-purple-500 text-center m-5 ">Contact</h1>

            <Row justify="center" align="center" className="p-10">
                <Col
                    span={10}
                    className="border-solid border border-purple-100 p-10 rounded-lg shadow-lg shadow-indigo-500/50"
                >
                    <Form name="form-contact" onFinish={handleFinish}>
                        <Form.Item
                            label="Name"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "le nom est obligatoire",
                                },
                            ]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "verfier le champ d email",
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            label="Telephone"
                            name="tel"
                            rules={[
                                {
                                    validator: checkPhone,
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                addonBefore="+212"
                                style={{ width: "100%" }}
                                placeholder="### ## ## ##"
                            />
                        </Form.Item>

                        <Form.Item label="Message" name="Message">
                            <Input.TextArea placeholder="Message" />
                        </Form.Item>

                        <Form.Item label="" colon={false} className="text-center">
                            <Button htmlType="submit">Envoyer</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
