export = json_schema_faker;

declare function json_schema_faker(schema: any, refs: any): any;

declare namespace json_schema_faker {
    const prototype: {
    };

    const version: string;

    function define(name: any, cb: any): any;

    function extend(name: any, cb: any): any;

    function format(nameOrFormatMap: any, callback: any): any;

    function locate(name: any): any;

    function option(nameOrOptionMap: any): any;

    function resolve(schema: any, refs: any, cwd: any): any;

    namespace define {
        const prototype: {
        };

    }

    namespace extend {
        const prototype: {
        };

    }

    namespace format {
        const prototype: {
        };

    }

    namespace locate {
        const prototype: {
        };

    }

    namespace option {
        const prototype: {
        };

    }

    namespace random {
        function date(step: any): any;

        function number(min: any, max: any, defMin: any, defMax: any, hasPrecision: any): any;

        function pick(collection: any): any;

        function randexp(value: any): any;

        function shuffle(collection: any): any;

        namespace date {
            const prototype: {
            };

        }

        namespace number {
            const prototype: {
            };

        }

        namespace pick {
            const prototype: {
            };

        }

        namespace randexp {
            const prototype: {
            };

        }

        namespace shuffle {
            const prototype: {
            };

        }

    }

    namespace resolve {
        const prototype: {
        };

    }

}

