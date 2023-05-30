import { RequestData } from "@/types/globals";
import axios from "axios";

export const getData = async (id: string) => {
  const res = await axios.get<RequestData>(
    `http://localhost:3000/api/getData?id=${id}`
  );
  return res.data;
};
