function toQueryString(params: { [s: string]: string }): string {
    const string = Object.keys(params).map(v => {
        return `${v}=${params[v]}`;
    });

    if (string.length === 0) {
        return window.location.origin + window.location.pathname;
    }

    return `?${string.join("&")}`;
}

export function getParams(): { [s: string]: string } {
    const search = window.location.search.split("&");

    if (!search[0]) {
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

export function getParam(param: string): string | undefined {
    return getParams()[param];
}

export function setParams(params: {
    [s: string]: string;
}): { [s: string]: string } {
    window.history.replaceState(null, document.title, toQueryString(params));
    return getParams();
}

export function setParam(
    param: string,
    value: string
): { [s: string]: string } {
    return setParams({ ...getParams(), ...{ [param]: value } });
}

export function removeParam(param: string): { [s: string]: string } {
    const params = getParams();
    const keys = Object.keys(params).filter(v => {
        return v !== param;
    });

    if (keys.length === 0) {
        return setParams({});
    }

    const map = keys
        .map(v => {
            return typeof getParam(v) !== undefined ? { [v]: getParam(v) } : {};
        })
        .reduce((p, c) => {
            return { ...p, ...c };
        });

    return setParams(map as { [s: string]: string });
}
