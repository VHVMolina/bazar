import { ProductsContext } from "@/app/layout";
import axios from "axios";
import { useContext } from "react";
import {useParams} from 'next/navigation'

export const useHandleProduct = () => {
    let store = useContext(ProductsContext);
    let param = useParams();
    
    const id = param.id;

    let { setProductInfo } = store!;

    const handleProduct = async () => {
        let reqBody = {
            id,
        };

        let res = await axios.post("/api/product", reqBody, {
            headers: {
                "Content-Type": "Application/json",
            },
        });

        if (res.status >= 200 && res.status <= 299) {
            setProductInfo(res.data.products);
            return;
        }
    };

    return handleProduct
}