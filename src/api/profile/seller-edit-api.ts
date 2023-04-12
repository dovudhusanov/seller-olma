import axiosInstance from "../axios";
import {SellerTypes} from "../../types/seller.types";

export const SellerEditApi = (id: any, sellerInfo: SellerTypes) =>
    axiosInstance.patch(`/seller/${id}/`, sellerInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });