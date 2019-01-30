// import React, {Component} from 'react';

let lastId = 0;

export default function(prefix='idNew') {
    lastId++;
    return `${prefix}${lastId}`;
}