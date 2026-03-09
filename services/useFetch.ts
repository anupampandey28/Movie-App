import { useEffect, useState, useCallback } from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetchFunction()
      setData(res)

    } catch (err) {
      setError(err instanceof Error ? err : new Error("An Error Occured !!"))
    } finally {
      setLoading(false)
    }
  }, [fetchFunction])

  const reset = () => {
    setData(null)
    setError(null)
    setLoading(false)
  }

  useEffect(() => {
    if (!autoFetch) return
    fetchData()
  }, [autoFetch, fetchData])

  return { data, loading, error, refetch: fetchData, reset }
}

export default useFetch