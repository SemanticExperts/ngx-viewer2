# ngx-viewer2 :mag_right:

[![Latest Stable Version](https://img.shields.io/npm/v/ngx-viewer.svg)](https://www.npmjs.com/package/@lenin.ochoa/ngx-viewer2) [![Total Downloads](https://img.shields.io/npm/dt/ngx-viewer2.svg)](https://npm-stat.com/charts.html?package=ngx-viewer2) [![License](https://img.shields.io/github/license/winteragency/ngx-viewer.svg)](https://github.com/LeninOchoa/ngx-viewer2) [![Made by L.E.O.R](https://img.shields.io/badge/Made%20by-L.E.O.R.-green)](https://synios.de)

This is a simple Angular 15+ directive wrapping the amazing [Viewer.js](https://fengyuanchen.github.io/viewerjs/) library.

Forked from [winteragency/ngx-viewer](https://github.com/winteragency/ngx-viewer)

## Installation

Add both this library and the original Viewer.js library as dependencies to your project:

`npm install @lenin.ochoa/ngx-viewer2 viewerjs`

Import the module into your application's `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import ngx-viewer module
import { NgxViewer2Module } from "@lenin.ochoa/ngx-viewer2";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxViewer2Module // add ngx-viewer module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Finally, you'll need to import the styles for Viewer.js somehow, for example in your base styles.(s)css:

```css
@import '~viewerjs/dist/viewer.css';
```

## Basic usage

The `ngxViewer2` directive can be added to a container wrapping multiple images, or to an individual image. The default Viewer.js configuration options will be used.

### Single image

```html
<img src="https://picsum.photos/2000/1500" ngxViewer2>
```

### Multiple images (gallery)

```html
<div ngxViewer2>
  <img src="https://picsum.photos/2000/1500/?random=1" alt="Image 1">
  <img src="https://picsum.photos/2000/1500/?random=2" alt="Image 2">
  <img src="https://picsum.photos/2000/1500/?random=3" alt="Image 3">
</div>
```

## Options

All [options](https://github.com/fengyuanchen/viewerjs#options) exposed by Viewer.js can be set for this directive using `[viewerOptions]`:

Template file (HTML)
```html
<img src="https://picsum.photos/2000/1500" ngxViewer2 [viewerOptions]="viewerOptions">
```

Component file (TS)
```typescript
public viewerOptions: any = {
  navbar: false,
  toolbar: {
    zoomIn: 4,
    zoomOut: 4,
    oneToOne: 4,
    reset: 4,
    prev: 4,
    play: {
      show: 4,
      size: 'large',
    },
    next: 4,
    rotateLeft: 4,
    rotateRight: 4,
    flipHorizontal: 4,
    flipVertical: 4,
  }
};
```

> **Note**: The Viewer.js defaults are always used as standard, with the [exception of the `transition` option](#transitions).

## Events

All [events](https://github.com/fengyuanchen/viewerjs#events) exposed by Viewer.js are made available by the directive as output bindings:

```html
<img src="https://picsum.photos/2000/1500" ngxViewer2 (viewerReady)="onViewerReady($event)">
```

The available events are:
* viewerReady
* viewerShow
* viewerShown
* viewerHide
* viewerHidden
* viewerView
* viewerViewed
* viewerZoom
* viewerZoomed

See Viewer.js' docs for more information on each event.

## Transitions

There's a known issue with the Viewer.js transitions that are normally enabled by default. They work fine in development but break (without errors) whenever building with optimizations active (i.e building for production). To get around this, the directive disables transitions by default. If you want to re-enable them (if, for some reason, you aren't running optimizations as part of your production builds) you can set `transition: true` in your [`viewerOptions`](#options).

See [this issue](https://github.com/LeninOchoa/ngx-viewer2/issues/1).

## License

The MIT License

Copyright (c) 2018, WINTER AGENCY

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
