import axiosInstance from "../axios";
import {SellerTypes} from "../../types/seller.types";

export const CreateSellerApi = (id: any, sellerInfo: SellerTypes) =>
    axiosInstance.post(`/seller/`, sellerInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });