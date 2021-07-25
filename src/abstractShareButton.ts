import EventHandler from "./eventHandler"

export default abstract class AbstractShareButton {

    eventHandler: DomEventHandler
    selector: string

    constructor(eventHandler: EventHandler, selector: string) {
        this.selector = selector
        this.eventHandler = this.eventHandler
    }

    abstract createAction()

    bind(){
        let action = this.createAction()
        this.eventHandler.addEventListenerToElements(this.selector, 'click', action)
    }
}

