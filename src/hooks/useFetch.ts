import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  // useState
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // useEffect
  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  return { data, error, isFetching };
}
// O then é executado de de sucesso
// catch é executado quando da erro.
// finally independente se vai da erro ou não
// 2 bibliotecas para cosumir dados SWR(state while revalidate) é um controle de caches. e a ReactQuery para consumo de api restful
