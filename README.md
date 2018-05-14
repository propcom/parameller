# Parameller

[![CircleCI](https://circleci.com/gh/propcom/parameller.svg?style=shield)](https://circleci.com/gh/propcom/parameller) ![License](https://img.shields.io/npm/l/parameller.svg) ![Downloads](https://img.shields.io/npm/dw/parameller.svg) [![NPM](https://img.shields.io/npm/v/parameller.svg)](https://www.npmjs.com/package/parameller) ![Size](https://img.shields.io/bundlephobia/minzip/parameller.svg)

Parameller makes parsing url query strings in JS simple.

## Installation

Parameller is easy to install, simply run:

    yarn add parameller

or

    npm install parameller

### Usage

Simply import the functions you wish to use in your project as follows:

    import { getParam, getParams, removeParam, setParam, setParams, toQueryString, pushParam, pushParams, popParams } from "parameller";

### Types

    type Params = { [s: string]: string }

### Methods

#### toQueryString(params: { [s: string]: string }, base: string = ""): string

    const obj = {
        "test": "example",
        "name": "Samuel"
    }

    toQueryString(obj)

Output: `test=example&name=Samuel`

If the base property is set then it will prepend the base onto the query string.

#### getParam(param: string, callback?: (v: string) => void): string | undefined

Example url: `http://test.com/?test=hello&example=wow`

    getParam("test") // returns "hello"
    getParam("example") // returns "wow"
    getParam("something") // returns undefined

`getParam()` takes an optional callback that is only called if the parameter returns a value.

    getParam("test", value => {
        console.log(value) // logs "Hello"
    })

#### getParams(string: string = window.location.search): Params

Example url: `http://test.com/?test=hello&example=wow`

    getParams() // returns { test: "hello", example: "wow" }

### Replace State

The following methods will replace the currently url state, history will not be preserved.

#### setParam(param: string, value: string): Params

Example url: `http://test.com/?test=hello&example=wow`

    setParam("test", "goodbye")

Output: `http://test.com/?test=goodbye&example=wow`

#### setParams(params: Params): Params

Example url: `http://test.com/?test=hello&example=wow`

    setParams({ test: "goodbye" })

Output: `http://test.com/?test=goodbye`

#### removeParam(param: string): Params

Example url: `http://test.com/?test=hello&example=wow`

    removeParam("test")

Output: `http://test.com/?example=wow`

### Push State

The following methods will push the state onto the browser history stack, useful if you want to maintain back/forwards functionality.

#### pushParam(param: string, value: string): Params

Example url: `http://test.com/?test=hello&example=wow`

    setParam("test", "goodbye")

Output: `http://test.com/?test=goodbye&example=wow`

#### pushParams(params: Params): Params

Example url: `http://test.com/?test=hello&example=wow`

    setParams({ test: "goodbye" })

Output: `http://test.com/?test=goodbye`

#### popParam(param: string): Params

Example url: `http://test.com/?test=hello&example=wow`

    removeParam("test")

Output: `http://test.com/?example=wow`
