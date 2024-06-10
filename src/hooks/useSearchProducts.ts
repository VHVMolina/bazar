import { ProductsContext } from "@/app/layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface useSearchProps {
    ev?: Event;
    searchProduct: ({ ev, product }: { ev?: Event, product: string | undefined }) => Promise<void>
}

export const useSearchProduct = (): useSearchProps => {
    let navigate = useRouter();
    let store = useContext(ProductsContext);

    if (store === null) {
        throw new Error('Null object')
    }

    let { setProductsInfo } = store;

    const searchProduct = async ({ ev, product }: { ev?: Event, product: string | undefined }) => {
        let key: KeyboardEvent;

        if (ev) {
            key = ev as KeyboardEvent;
            if (key.key !== 'Enter') return;
        }

        let reqBody = {
            search: product
        };

        let res = await axios.post("/api/search", reqBody, {
            headers: {
                "Content-Type": "Application/json",
            },
        });

        if (res.status >= 200 && res.status <= 299) {
            setProductsInfo(res.data.products);
            navigate.push(`/items?search=${product}`);
            return;
        }
    };

    return { searchProduct }
};