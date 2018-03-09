export interface TableState {
    version: number;
    columns: any[];
    items: any[];
    toggleEdit: boolean;
    toggleLoading: boolean;
    isObsolete: boolean;
}
