import AbstractLinkShareButton from "./abstractLinkShareButton"

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {

    constructor(selector: string, url: string) {
        super(selector, url)
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`
    }
}

