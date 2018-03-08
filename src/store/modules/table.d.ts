export interface TableState {
    version: number,
    columns: Array<any>,
    items: Array<any>,
    toggleEdit: boolean,
    toggleLoading: boolean,
    isObsolete: boolean
}

export interface TableGetters {
    getState: TableState,
    getMetadata: number
}

export interface TableMutations {
    setMetadataVersion: {
        version: number
    },
    resetColumns: void,
    setColumns: {
        columns: Array<any>
    },
    addItem: {
        item: any
    },
    deleteItem: {
        item: any
    },
    toggleEdit: {
        isEdit: boolean
    },
    toggleLoading: {
        isLoading: boolean
    },
    setObsoleteMetadata: {
        isObsolete: boolean
    }
}

export interface TableActions {
    fetchMetadata: {
        toggleLoading: boolean,
    },
    fetchData: {
        toggleLoading: boolean,
        setMetadataVersion: number
    }
}