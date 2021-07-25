import EventHandler from "./eventHandler"
import AbstractLinkShareButton from "./abstractLinkShareButton"


export default class ShareButtonLinkedIn extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, selector: string, url: string) {
        super(eventHandler, selector, url)
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`
    }
}

