import { ProductsContext } from "@/app/layout";
import { SingleProduct } from "@/interfaces/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface axiosResponse {
    products: SingleProduct[];
}

export const useShowProductCard = () => {
    let navigate = useRouter();
    let context = useContext(ProductsContext);
    let { setProductInfo } = context!;
    const showProductInfo = async (id: number) => {
        let reqBody = { id };

        let res = await axios.post("/api/product", reqBody, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.status >= 200 && res.status <= 299) {
            let data: axiosResponse = res.data;
            let { products } = data;
            setProductInfo(products);
            navigate.push(`/items/${id}`);
        }
    };

    return showProductInfo
}