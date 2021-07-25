import DOMEventHandler from './domEventHandler'
import AbstractShareButton from './abstractShareButton'
import ShareButtonTwitter from './shareButtonTwitter'
import ShareButtonFacebook from './shareButtonFacebook'
import ShareButtonLinkedIn from './shareButtonLinkedIn'
import ShareButtonPrint from './shareButtonPrint'

const eventHandler = new DOMEventHandler
const link = 'https://www.quantic.digital/'

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', link)
twitter.bind()
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', link)
facebook.bind()
const linkedIn: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, '.btn-linkedin', link)
linkedIn.bind()
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print')
print.bind()

