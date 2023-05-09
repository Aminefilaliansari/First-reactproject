import { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import { useParams } from "react-router-dom";

export default function User() {
    const { userId } = useParams();
    const [dataJsonID, setDataJsonID] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDataJson() {
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                setDataJsonID(data);
                setLoading(false);
                return true;
            }
            return Error("Message Error");
        }

        getDataJson();
    }, []);

    console.log("dataJsonID: ", dataJsonID);

    return (
        <div className=" Container mx-auto h-96 flex justify-center items-center">
            <Skeleton loading={loading} active className="text-center w-1/3">
                <Card
                    key={dataJsonID.id}
                    title={`ID : ${dataJsonID.id}`}
                    className="text-center w-1/3 mx-auto shadow-lg shadow-purple-500"
                >
                    <b>Name: </b>
                    <span>{dataJsonID.name}</span>
                    <br />
                    <b>User Name: </b>
                    <span> {dataJsonID.username}</span>
                    <br />
                    <b>Email: </b>
                    <span> {dataJsonID.email}</span>
                    <br />
                    <b>Phone: </b>
                    <span> {dataJsonID.phone}</span>
                    <br />
                </Card>
            </Skeleton>
        </div>
    );
}
