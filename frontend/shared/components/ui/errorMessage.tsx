import { AxiosError } from "axios"

interface Props {
  error: Error | AxiosError
}

export const ErrorMessage = ({ error }: Props) => {
  
  if(error instanceof AxiosError) {
    return (
      <p className='text-center text-red-500 text-base'>{error.response?.data.message}</p>
    )
  }

  return (
      <p className='text-center text-red-500 text-base'>{error.message}</p>
  )
}
