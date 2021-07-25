import ShareButtonTwitter from './shareButtonTwitter'
import ShareButtonFacebook from './shareButtonFacebook'
import ShareButtonLinkedIn from './shareButtonLinkedIn'
import ShareButtonPrint from './shareButtonPrint'

const link = 'https://www.quantic.digital/'

const twitter = new ShareButtonTwitter('.btn-twitter', link)
twitter.bind()
const facebook = new ShareButtonFacebook('.btn-facebook', link)
facebook.bind()
const linkedIn = new ShareButtonLinkedIn('.btn-linkedin', link)
linkedIn.bind()
const print = new ShareButtonPrint('.btn-print')
print.bind()

