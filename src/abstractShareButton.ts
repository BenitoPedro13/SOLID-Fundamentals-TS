import EventHandler from "./eventHandler"

export default abstract class AbstractShareButton {

    url: string
    eventHandler: EventHandler
    selector: string

    constructor(url: string, selector: string) {
        this.url = url,
        this.selector = selector
        this.eventHandler = new EventHandler()
    }

    abstract createLink(): string

    bind(){
        let link = this.createLink()
        this.eventHandler.addEventListenerToElements(this.selector, 'click', () => window.open(link))
    }
}

