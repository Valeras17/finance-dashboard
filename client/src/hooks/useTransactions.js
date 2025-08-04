import { useEffect, useState } from "react";
import { getTransactions } from '../services/api/transactionService';

export function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactions().then((res) => {
      setTransactions(res.data); 
      setLoading(false);
    });
  }, []);

  return { transactions, loading };
}
