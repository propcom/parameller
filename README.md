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

    import { getParam, getParams, removeParam, setParam, setParams, toQueryString } from "parameller";

### Methods

#### toQueryString(params: { [s: string]: string }, base: string = ""): string

    const obj = {
        "test": "example",
        "name": "Samuel"
    }

    toQueryString(obj)

Output: `?test=example&name=Samuel`

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

#### getParams: { [s: string]: string }

Example url: `http://test.com/?test=hello&example=wow`

    getParams() // returns { test: "hello", example: "wow" }

#### setParam(param: string, value: string): { [s: string]: string }

Example url: `http://test.com/?test=hello&example=wow`

    setParam("test", "goodbye")

Output: `http://test.com/?test=goodbye&example=wow`

#### setParams(params: { [s: string]: string }): { [s: string]: string }

Example url: `http://test.com/?test=hello&example=wow`

    setParams({ test: "goodbye" })

Output: `http://test.com/?test=goodbye`

#### removeParam(param: string): { [s: string]: string }

Example url: `http://test.com/?test=hello&example=wow`

    removeParam("test")

Output: `http://test.com/?example=wow`
