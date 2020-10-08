export interface PorductListComponentProps {
    actions: PorductListActionsInterface;
}
export interface PorductListState {
    productListDetail: Array<any>;

}
interface PorductListActionsInterface {
    triggerProductList(): void;
}