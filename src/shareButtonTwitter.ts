import AbstractLinkShareButton from "./abstractLinkShareButton"

export default class ShareButtonTwitter extends AbstractLinkShareButton {

    constructor(url: string, selector: string) {
        super(url, selector)
    }

    createLink(): string {
        return `https://www.twitter.com/share?url=${this.url}`
    }
}

