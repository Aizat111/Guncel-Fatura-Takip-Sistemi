import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/media/logos/default.svg')} alt='Good logo' />
      <span>Loading ...</span>
    </div>
  )
}
