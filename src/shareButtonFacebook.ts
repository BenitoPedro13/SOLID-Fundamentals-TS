import AbstractLinkShareButton from "./abstractLinkShareButton"

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(selector: string, url: string) {
        super(selector, url)
    }

    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`
    }
}

