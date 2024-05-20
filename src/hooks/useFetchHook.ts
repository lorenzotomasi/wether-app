import { useCallback, useEffect, useState } from "react"

interface UseFetchHookReturnType<T> {
  isLoading: boolean
  error: unknown
  data: T | undefined
}

type RetryCallReturnType<P extends []> = (...params: P) => void 

type UseFetchHookCompleteReturnType<T, P extends []> = [UseFetchHookReturnType<T>,RetryCallReturnType<P>]

interface UseFetchHookProps<T, P extends []> {
  promise: (...params: P) => Promise<T>
  params: P
}

function useFetchHook<T, P extends []>(props: UseFetchHookProps<T,P>): UseFetchHookCompleteReturnType<T,P> {
  const [state, setState] = useState<UseFetchHookReturnType<T>>({
    data: undefined,
    error: undefined,
    isLoading: true
  })

  const retryCall = useCallback((...params: P) => {
    props.promise(...params).then((result) => {
      setState({
        data: result,
        error: undefined,
        isLoading: false
      })
    }).catch((error) => {
      setState({
        data: undefined,
        error: error,
        isLoading: false
      })
    })
  }, [props.promise])

  useEffect(() => {
    retryCall(...props.params)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [state,retryCall]
}

export { useFetchHook }