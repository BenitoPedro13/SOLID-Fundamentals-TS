import ShareButtonTwitter from './shareButtonTwitter'
import ShareButtonFacebook from './shareButtonFacebook'
import ShareButtonLinkedIn from './shareButtonLinkedIn'

const link = 'https://www.quantic.digital/'

const twitter = new ShareButtonTwitter(link, '.btn-twitter')
twitter.bind()
const facebook = new ShareButtonFacebook(link, '.btn-facebook')
facebook.bind()
const linkedIn = new ShareButtonLinkedIn(link, '.btn-linkedin')
linkedIn.bind()
