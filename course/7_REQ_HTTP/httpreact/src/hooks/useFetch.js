import { useState, useEffect } from "react";

// custom hook
export const useFetch = url => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // fetch é uma alternativa nativa para conexão (como o Axios)
      const res = await fetch(url);

      // converte dados de json para objeto para ser utilizado
      const data = await res.json();

      setData(data)
    }

    fetchData();
  }, [url])

  return { data };
}