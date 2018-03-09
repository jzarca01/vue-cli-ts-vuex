export const transformMetadata = (metadata: any) => {
    const result: any[] = [];
    const keys: string[] = Object.keys(metadata);
    const values: any[] = Object.values(metadata);
    for (let i = 0; i < keys.length; i++) {
      result.push({
        field: keys[i],
        label: keys[i],
        type: values[i].type,
      });
    }
    return result;
  };
