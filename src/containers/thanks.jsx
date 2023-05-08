import { Result } from "antd";
import { useSearchParams } from "react-router-dom";

export default function Thanks() {
    const [queryParameters] = useSearchParams();
    const name = queryParameters.get("name");

    return (
        <Result
            status="success"
            title={`Merci ${name}`}
            subTitle="Le message est bien envoyé"
        />
    );
}
