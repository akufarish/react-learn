import axios from "../axios";
import { useState } from "react";
import { validationsData } from "../../utils/Index";
import useSwal from "../swal";
import { useNavigate } from "react-router-dom";

export default function useValidation() {
  const [validations, setValidations] = useState<validationsData[]>([]);
  const [status, setStatus] = useState([]);
  const { accepted, rejected } = useSwal();
  const navigate = useNavigate();

  async function getValidation() {
    const response = await axios.get("/api/v1/validations");
    console.log(response.data.Body.validations);
    setValidations(response.data.Body.validations);
  }

  async function getStatus() {
    const response = await axios.get("/api/v1/validations/status");
    console.log(response.data.Body);
    setStatus(response.data.Body.validations);
  }

  async function storeValidations(params: validationsData) {
    try {
      const response = await axios.post("/api/v1/validations", params);
      console.log(response.data);
      accepted(response.data.Body.message);
      navigate("/dashboard");
      console.log(params);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        rejected(error.response?.data.message);
      }
    }
  }

  return {
    getValidation,
    validations,
    getStatus,
    status,
    storeValidations,
  };
}
