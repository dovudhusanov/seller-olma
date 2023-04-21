import axiosInstance from "../axios";
import {SellerInterface} from "../../interfaces/seller.interface";

export const CreateSellerApi = (id: string | number | null, sellerInfo: SellerInterface) =>
    axiosInstance.post(`/seller/`, sellerInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });