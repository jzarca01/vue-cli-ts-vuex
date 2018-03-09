const checkMetadataValidity = (store: any) => {
    const watchedStores = ['table'];
    store.subscribe((mutation: any) => {
      watchedStores.map((watchedStore) => {
        if (mutation.type === `${watchedStore}/setObsoleteMetadata` && mutation.payload === true) {
          console.warn('detected mutation obsolete metadata');
          store.dispatch(`${watchedStore}/fetchMetadata`)
            .then(() => store.dispatch(`${watchedStore}/fetchData`));
        }
      });
    });
  };

export default checkMetadataValidity;
