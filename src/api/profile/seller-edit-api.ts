import axiosInstance from "../axios";
import {SellerInterface} from "../../interfaces/seller.interface";

export const SellerEditApi = (id: string | any, sellerInfo: SellerInterface | any) =>
    axiosInstance.patch(`/seller/${id}/`, sellerInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });