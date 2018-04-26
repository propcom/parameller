# Parameller

[![Build Status](https://travis-ci.org/propcom/parameller.svg?branch=master)](https://travis-ci.org/propcom/parameller)

Parameller makes parsing url query strings in JS simple.

## Installation

Parameller is easy to install, simply run:

    yarn add parameller
    
or 

    npm install parameller

### Usage

Simply import the functions you wish to use in your project as follows:

    import { getParam, getParams, removeParam, setParam, setParams } from "paramella";
    
### Methods

#### getParam(param: string): string

Example url: `http://test.com/?test=hello&example=wow`

    getParam("test") // returns "hello"
    getParam("example") // returns "wow"
    getParam("something") // returns undefined
    
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