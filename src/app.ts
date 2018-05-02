// This is here just for development, this will not get compiled into the dist folder, only the source in propForms will.

import { getParam, getParams } from "./parameller";

getParam("test", v => {
    console.log(v);
});
