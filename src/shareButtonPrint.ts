import EventHandler from "./eventHandler"
import AbstractShareButton from "./abstractShareButton"

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(eventHandler: EventHandler, selector: string) {
        super(eventHandler, selector)
    }

    createAction(): any {
        return () => window.print()
    }
}

