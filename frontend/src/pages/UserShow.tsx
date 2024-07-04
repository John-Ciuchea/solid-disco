import { useLoaderData } from 'react-router-dom'
import { FC } from 'react'
import { Message } from '../api/user.ts'

const UserShow: FC = () => {
  const message = useLoaderData() as Message
  const imgUrl = 'https://live-production.wcms.abc-cdn.net.au/09fc4d971d2ae450966dd606be4d3587?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=417&width=862&height=485'

  return (
    <div className="card md:card__desktop">
      <img className="card-image md:card-image__desktop" src={imgUrl} alt="Cute cat" />

      <div className="card-text md:card-text__desktop">

        <div className="font-bold text-green-600 mb-2">{message.title}</div>
        <div className="font-thin">{message.message}</div>
        <div className="font-bold my-4">Total price: &#163;{message.totalPrice}</div>

        <div className="w-full flex justify-between self-end">
          <button className="flex-1 button-green">see details</button>
          <button className="flex-1 button-green__outlined ml-4">edit delivery</button>
        </div>

      </div>
      {message.freeGift &&
        <div
          className="card-badge md:card-badge__desktop"
        >FREE GIFT</div>
      }
    </div>
  );
}

export default UserShow
