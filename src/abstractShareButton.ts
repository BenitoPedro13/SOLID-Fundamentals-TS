import EventHandler from "./eventHandler"

export default abstract class AbstractShareButton {

    eventHandler: EventHandler
    selector: string

    constructor(selector: string) {
        this.selector = selector
        this.eventHandler = new EventHandler()
    }

    abstract createAction()

    bind(){
        let action = this.createAction()
        this.eventHandler.addEventListenerToElements(this.selector, 'click', action)
    }
}

