import AbstractShareButton from './abstractShareButton'
import ShareButtonTwitter from './shareButtonTwitter'
import ShareButtonFacebook from './shareButtonFacebook'
import ShareButtonLinkedIn from './shareButtonLinkedIn'
import ShareButtonPrint from './shareButtonPrint'

const link = 'https://www.quantic.digital/'

const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', link)
twitter.bind()
const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', link)
facebook.bind()
const linkedIn: AbstractShareButton = new ShareButtonLinkedIn('.btn-linkedin', link)
linkedIn.bind()
const print: AbstractShareButton = new ShareButtonPrint('.btn-print')
print.bind()

