import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.BACKEND_API_URL || 'http://localhost:3000'
})

export type Message = {
  title: string
  message: string
  totalPrice: number
  freeGift: boolean
}

export const getUserMessage = async (id: string): Promise<Message> => {
  const { data } = await client.get(`/comms/your-next-delivery/${id}`)
  return data
}
