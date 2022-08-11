import {Message} from '../styled/error.js'


function Error({children}) {
  return (
    <Message>{children}</Message>
  )
}

export default Error