import AbstractShareButton from "./abstractShareButton"

export default class ShareButtonTwitter extends AbstractShareButton {

    constructor(url: string, selector: string) {
        super(url, selector)
    }

    createLink(): string {
        return `https://www.twitter.com/share?url=${this.url}`
    }
}

