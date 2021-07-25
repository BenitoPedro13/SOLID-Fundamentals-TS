import AbstractShareButton from "./abstractShareButton"

export default class ShareButtonLinkedIn extends AbstractShareButton {

    constructor(url: string, selector: string) {
        super(url, selector)
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`
    }
}

