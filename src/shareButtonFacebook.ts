import AbstractShareButton from "./abstractShareButton"

export default class ShareButtonFacebook extends AbstractShareButton {

    constructor(url: string, selector: string) {
        super(url, selector)
    }

    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`
    }
}

