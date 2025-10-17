import{e as s}from"./base-CShCMygk.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return(o,r)=>{const{slot:e}=t??{},n="slot"+(e?`[name=${e}]`:":not([name])");return s(o,r,{get(){return this.renderRoot?.querySelector(n)?.assignedNodes(t)??[]}})}}export{i as n};
