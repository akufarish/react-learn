import { useState } from "react";
import { category } from "../../utils/Index";
import axios from "../axios";

export default function useJobCategory() {
  const [category, setCategory] = useState<category[]>([]);

  async function index() {
    const response = await axios.get("/api/v1/category");
    setCategory(response.data);
  }



  return { index, category };
}
