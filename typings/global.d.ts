/// <reference path="../src/b.js" />

import Vue from "vue";

declare global {
  interface Window {
    bModule: typeof bModule
  }
}
