import EventHandler from "./eventHandler"
import AbstractLinkShareButton from "./abstractLinkShareButton"


export default class ShareButtonTwitter extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, url: string, selector: string) {
        super(eventHandler, url, selector)
    }

    createLink(): string {
        return `https://www.twitter.com/share?url=${this.url}`
    }
}

