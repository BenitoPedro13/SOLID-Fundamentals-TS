import AbstractShareButton from "./abstractShareButton"

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(selector: string) {
        super(selector)
    }

    createAction(): any {
        return () => window.print()
    }
}

