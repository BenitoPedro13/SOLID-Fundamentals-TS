import EventHandler from "./eventHandler"
import AbstractLinkShareButton from "./abstractLinkShareButton"


export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, selector: string, url: string) {
        super(eventHandler, selector, url)
    }

    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`
    }
}

