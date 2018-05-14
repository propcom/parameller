export type Params = {
    [s: string]: string;
};

export function toQueryString(
    params: Params,
    base?: string
): string | undefined {
    const string = Object.keys(params).map(v => {
        return `${v}=${params[v]}`;
    });

    if (string.length === 0) {
        return;
    }

    const query = string.join("&");

    return base ? base + query : query;
}

export function getParams(string: string = window.location.search): Params {
    const search = string.split("&");

    if (!string[0]) {
        return {};
    }

    const map = search.map(v => {
        const split = v.split("=");
        const name = split[0].replace("?", "");

        return {
            [name]: split[1]
        };
    });

    return map.reduce((p, c) => {
        return { ...p, ...c };
    });
}

export function getParam(
    param: string,
    callback?: (v: string) => void
): string | undefined {
    const value: string | undefined = getParams()[param];

    if (typeof callback !== "undefined" && typeof value !== "undefined") {
        callback!(value);
    }

    return value;
}

export function setParams(params: Params): Params {
    const url = generateUrl(params);

    window.history.replaceState(null, document.title, url);
    return getParams();
}

export function pushParams(params: Params): Params {
    const url = generateUrl(params);

    window.history.pushState(null, document.title, url);

    return getParams();
}

export function setParam(param: string, value: string): Params {
    return setParams({ ...getParams(), ...{ [param]: value } });
}

export function pushParam(param: string, value: string): Params {
    return pushParams({ ...getParams(), ...{ [param]: value } });
}

export function removeParam(param: string): Params {
    return setParams(deleteParam(param));
}

export function popParam(param: string): Params {
    return pushParams(deleteParam(param));
}

function generateUrl(params: Params): string {
    return (
        toQueryString(params, "?") ||
        window.location.origin + window.location.pathname
    );
}

function deleteParam(param: string): Params {
    const params = getParams();
    const keys = Object.keys(params).filter(v => {
        return v !== param;
    });

    if (keys.length === 0) {
        return {};
    }

    const map = keys
        .map(v => {
            return typeof getParam(v) !== undefined ? { [v]: getParam(v) } : {};
        })
        .reduce((p, c) => {
            return { ...p, ...c };
        });

    return map as Params;
}
