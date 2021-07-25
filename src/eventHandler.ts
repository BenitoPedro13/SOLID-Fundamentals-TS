export default class EventHandler {
    addEventListenerToElements(selector: string, event: string, callback: any){
        const elements: any = document.querySelectorAll(selector)
        for(const element of elements){
            element.addEventListener(event, callback)
        }
    }
}