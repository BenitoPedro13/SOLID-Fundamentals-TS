export default interface EventHandler {
    addEventListenerToElements(selector: string, event: string, callback: any)
}