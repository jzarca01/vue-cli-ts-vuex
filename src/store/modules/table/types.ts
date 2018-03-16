export interface TableState {
    version: number;
    columns: Array<any>;
    items: Array<any>;
    toggleEdit: boolean;
    toggleLoading: boolean;
    isObsolete: boolean;
}
