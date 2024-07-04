import { useRouteError } from 'react-router-dom'
import { FC } from 'react'

const ErrorPage: FC = () => {
  const error = useRouteError() as any

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <h1>Oops!</h1>
      <h2>{error.status}</h2>
      <p>{error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
    </div>
  )
}

export default ErrorPage
