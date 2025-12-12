import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (url, deps = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    setLoading(true)
    setError(null)

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, deps) // 👈 re-fetch whenever dependency changes

  return { data, loading, error }
}
