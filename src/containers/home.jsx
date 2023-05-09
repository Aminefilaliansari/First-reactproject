import { useEffect, useState } from "react";
import { Carousel, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
    const [dataJson, setDataJson] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        async function getDataJson() {
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                setDataJson(data);
                return true;
            }
            return Error("Message Error");
        }

        getDataJson();
    }, []);

    console.log("dataJson: ", dataJson);
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-purple-500 text-center m-5">Home</h1>
                <Carousel effect="fade">
                    <div className="h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-50 text-center leading-[24rem] text-3xl"></div>
                    <div className="h-40 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-gray-50 text-center leading-[24rem] text-3xl"></div>
                    <div className="h-40 bg-gradient-to-r from-cyan-500 to-blue-500  text-gray-50 text-center leading-[24rem] text-3xl"></div>
                </Carousel>

                <div id="ListUser" className="p-10">
                    <h2 className="text-center"> Liste des utilisateur</h2>
                    <Row>
                        {dataJson.map((item) => (
                            <Col span={6} key={item.id} className="p-5">
                                <Link to={`user/${item.id}`}>
                                    <Card
                                        title={`ID : ${item.id}`}
                                        className="hover:shadow-lg hover:shadow-purple-500"
                                    >
                                        {item.name}
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}
