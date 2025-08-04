import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions";

export const getTransactions = () => axios.get(API_URL);
export const getTransactionById = (id) => axios.get(`${API_URL}/${id}`);
export const createTransaction = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data; // ✅ must return new transaction
};
export const updateTransaction = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data; // ✅ must return updated transaction
};
export const deleteTransaction = (id) => axios.delete(`${API_URL}/${id}`);
