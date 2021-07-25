import AbstractShareButton from "./abstractShareButton";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {

    url: string

    constructor(selector: string, url: string) {
        super(selector)
        this.url = url
    }

    abstract createLink(): string

    createAction(): any {
        const link = this.createLink()
        return () => window.open(link)
    }
}