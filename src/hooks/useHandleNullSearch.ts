import { ProductsContext } from '@/ProductContext/productContext'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

export const useHandleSearch = () => {
    let store = useContext(ProductsContext);
    let searchParams = useSearchParams();

    const search = searchParams.get("search");
    let { setProductsInfo } = store!;

    const handleSearch = async () => {
        let reqBody = {
            search,
        };

        let res = await axios.post("/api/search", reqBody, {
            headers: {
                "Content-Type": "Application/json",
            },
        });

        if (res.status >= 200 && res.status <= 299) {
            setProductsInfo(res.data.products);
            return;
        }
    };

    return handleSearch
}