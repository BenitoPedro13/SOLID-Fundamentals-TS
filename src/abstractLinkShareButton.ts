import EventHandler from "./eventHandler";
import AbstractShareButton from "./abstractShareButton";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {

    url: string

    constructor(eventHandler: EventHandler, selector: string, url: string) {
        super(eventHandler, selector)
        this.url = url
    }

    abstract createLink(): string

    createAction(): any {
        const link = this.createLink()
        return () => window.open(link)
    }
}