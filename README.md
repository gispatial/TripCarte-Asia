# tdmp-merchants
 TDMP-MERCHANTS-FRONTEND-VUE-WITH-API
 <p>
 </p>
 <img src="https://github.com/gispatial/tripcarte-asia/blob/master/public/tdpm-home.png" width="100%">
 
## TDPM-API
<table data-v-7b6b9330="">
<thead data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<th data-v-7b6b9330="">Name</th>
<th data-v-7b6b9330="">Type</th>
<th data-v-7b6b9330="">Parameters</th>
<th data-v-7b6b9330="">Description</th>
<th data-v-7b6b9330="">default</th>
</tr>
</thead>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableCustomizer</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of theme customizer</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableThemeTour</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable app tour in Vuexy Admin</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">footerType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how footer is displayed</td>
<td data-v-7b6b9330="">static</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">hideScrollToTop</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of scroll to top button</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">mainLayoutType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">horizontal/ vertical</td>
<td data-v-7b6b9330="">Layout Type</td>
<td data-v-7b6b9330="">vertical</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarColor</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">Hex, rgb, rgba or valid HTML Color</td>
<td data-v-7b6b9330="">Change color of navbar using this property</td>
<td data-v-7b6b9330="">&nbsp;</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">floating, static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how navbar is displayed</td>
<td data-v-7b6b9330="">floating</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">routerTransition</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none</td>
<td data-v-7b6b9330="">This property is used to change the router animation.</td>
<td data-v-7b6b9330="">zoom-fade</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">sidebarCollapsed</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Create collapsed sidebar by setting this property to true.</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">theme</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">light, dark, semi-dark</td>
<td data-v-7b6b9330="">Set between light theme, dark theme &amp; semi-dark theme.</td>
<td data-v-7b6b9330="">light</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">rtl</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable RTL</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
 
# Project setup

$ npm install or $ yarn

Compiles and hot-reloads for development:

- npm run serve
- yarn serve 

  Note that the development build is not optimized.
  To create a production build, run yarn build.

# Steps to build it

## Prerequisites

You will need to have Node.js or Yarn installed in your machine. 
[[NodeJs](https://nodejs.org/en)] [[YarnPkg](https://yarnpkg.com/)]


## Steps

- `npm install` or 'yarn install' to install existing dependencies:

```
$ npm install or $ yarn
```

- Create Auth0 `server` api model folder/ dir:

### mkdir ./server

```{
  "domain": "https://dev-tripcarte-asia.us.auth0.com/api/v2/",
  "clientId": "5ee225700bf777001acb0cf4"
}
```
- Execute cli to deploy as production or development:

```
npm run serve or yarn serve

- App running at:
- Local:   http://localhost:8080/ 
- Network: http://192.168.0.114:8080/
```

## Third-Party Plugins
Vuexy Admin comes with useful third party plug-ins to help you building your app quickly.

### #agGrid Table
Description: THE best javascript grid in the world

Demo: Visit

Docs: Documentation


# About Tripcarte.Asia Dashboard Portal Project

At Netquest Solutions Sdn Bhd, our engineers constantly use latest framework, technologies and programming language. Keeping up to date with latest framework not only ensures rapid development time, but updated framework technologies are more protected from malwares, security threats and operating system incompatibility. For more info, please visit: https://netquestsolutions.com/

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://tripcarte.asia/" target="_blank">Tripcarte.Asia</a>.

## Third-Party Plugins
Vuexy Admin comes with useful third party plug-ins to help you building your app quickly.
### agGrid Table
THE best javascript grid in the world.
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui-elements/ag-grid-table"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://www.ag-grid.com/vue-getting-started/"><span class="s3">Documentation</span></a></span></p>
### Algolia
Description: Algolia's full suite APIs enable teams to develop unique search and discovery experiences for their customers across all platforms and devices.
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/eCommerce/shop"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://www.algolia.com/doc"><span class="s3">Documentation</span></a></span></p>
### Axios
Description: Promise based HTTP client for the browser and node.js
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui-elements/data-list/thumb-view"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/axios/axios"><span class="s3">Documentation</span></a></span></p>
### Vue InstantSearch
Description: InstantSearch is a family of open-source, production-ready UI libraries that eases the usage and installation of the Algolia search engine.
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/eCommerce/shop"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/vue/"><span class="s3">Documentation</span></a></span></p>
### Auth0
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Auth0 provides universal authentication &amp; authorization platform for web, mobile and legacy applications.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/login"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://auth0.com/docs/quickstart/spa/vuejs"><span class="s3">Documentation</span></a></span></p>
### Firebase
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/login"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://firebase.google.com/docs/"><span class="s3">Documentation</span></a></span></p>
### Apex Charts
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;ApexCharts.js - An open-source HTML5 JavaScript charting library that helps developers to create responsive &amp; interactive JS charts for web pages.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/charts-and-maps/charts/apex-charts"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://apexcharts.com/docs/vue-charts/"><span class="s3">Documentation</span></a></span></p>
### ChartsJS
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Easy and beautiful charts with Chart.js and Vue.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/charts-and-maps/charts/chartjs"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://vue-chartjs.org/guide/"><span class="s3">Documentation</span></a></span></p>
### Clipboard
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;A simple vuejs 2 binding for clipboard.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/clipboard"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/Inndy/vue-clipboard2"><span class="s3">Documentation</span></a></span></p>
### Context Menu
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;</span><span class="s6">vue-content</span><span class="s2">&nbsp;provides a simple yet flexible context menu for Vue.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/context-menu"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://vue-context.randallwilk.com/docs"><span class="s3">Documentation</span></a></span></p>
### ECharts
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;ECharts component for Vue.js.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/charts-and-maps/charts/echarts"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/ecomfe/vue-echarts"><span class="s3">Documentation</span></a></span></p>
### VeeValidate
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Template Based Validation Framework for Vue.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/forms/form-validation"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://baianat.github.io/vee-validate/guide/"><span class="s3">Documentation</span></a></span></p>
### Vue Datepicker
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/datepicker"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/charliekassel/vuejs-datepicker"><span class="s3">Documentation</span></a></span></p>
### Vue Flatpickr Component
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Vue.js component for Flatpickr datetime picker</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/datetime-picker"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/ankurk91/vue-flatpickr-component"><span class="s3">Documentation</span></a></span></p>
### Vue2 Hammer
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Hammer.js wrapper for Vue 2.x to support some touching operation in the mobile.[Swipe In/Out sidemenu]</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/bsdfzzzy/vue2-hammer"><span class="s3">Documentation</span></a></span></p>
### Vue Form Wizard
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Vue-form-wizard is a vue based component with no external depenendcies which simplifies tab wizard management.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/forms/form-wizard"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://binarcode.github.io/vue-form-wizard/#/"><span class="s3">Documentation</span></a></span></p>
### Vue Full Calendar
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;vue calendar fullCalendar. no jquery required. Schedule events management.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<em>Removed</em></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/Wanderxx/vue-fullcalendar"><span class="s3">Documentation</span></a></span></p>
### Vue Simple Calendar
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Simple Vue component to show a month-grid calendar with events</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar/vue-simple-calendar"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/richardtallent/vue-simple-calendar"><span class="s3">Documentation</span></a></span></p>
### Vue Select
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;A Vue.js select component that provides similar functionality to Select2/Chosen without the overhead of jQuery.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/select"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://sagalbot.github.io/vue-select/docs/"><span class="s3">Documentation</span></a></span></p>
### Vue Draggable
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Vue drag-and-drop component based on Sortable.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/drag-and-drop"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/SortableJS/Vue.Draggable"><span class="s3">Documentation</span></a></span></p>
### Vue Video Player
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;videojs component for vuejs</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui-elements/card/basic"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://surmon-china.github.io/vue-video-player/"><span class="s3">Documentation</span></a></span></p>
### Vue Feather Icons
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Simply beautiful open source icons as Vue functional components.</span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/egoist/vue-feather-icons"><span class="s3">Documentation</span></a></span></p>
### Vue Google Maps
<p class="p2"><span class="s2"><strong>Description:</strong></span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/charts-and-maps/maps/goog<p class="p4"><span class="s5">le-map"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/xkjyeah/vue-google-maps"><span class="s3">Documentation</span></a></span></p>
### Vue I18n
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Vue I18n is internationalization plugin for Vue.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/i18n"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://kazupon.github.io/vue-i18n/introduction.html"><span class="s3">Documentation</span></a></span></p>
### Vue Perfect Scollbar
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;scrollbar for vue, depend on perfect-scrollbar</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;Main Sidebar</span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/Degfy/vue-perfect-scrollbar"><span class="s3">Documentation</span></a></span></p>
### Vue Prism Component
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;highlight code using prism.js and vue component</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;Card Code Toggle</span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/egoist/vue-prism-component"><span class="s3">Documentation</span></a></span></p>
### Vue Quill Editor
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Quill editor component for Vue, support SPA and SSR.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/quill-editor"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/surmon-china/vue-quill-editor"><span class="s3">Documentation</span></a></span></p>
### Vue Simple Suggest
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Feature-rich autocomplete component for Vue.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/autocomplete"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/KazanExpress/vue-simple-suggest"><span class="s3">Documentation</span></a></span></p>
### Vue Star Ratings
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;A simple, highly customisable star rating component for Vue 2.x</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/star-ratings"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/craigh411/vue-star-rating"><span class="s3">Documentation</span></a></span></p>
### Vue Tour
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Vue Tour is a lightweight, simple and customizable guided tour plugin for use with Vue.js. It provides a quick and easy way to guide your users through your application.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/pulsardev/vue-tour"><span class="s3">Documentation</span></a></span></p>
### Vue Tree Halower
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;tree and multi-select component based on Vue.js 2.0</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/tree"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/halower/vue-tree"><span class="s3">Documentation</span></a></span></p>
### Vue BackToTop
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Quill editor component for Vue, support SPA and SSR.</span></p>
<p class="p5"><span class="s4"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/"><span class="s3">Visit - Scroll down in page</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/caiofsouza/vue-backtotop"><span class="s3">Documentation</span></a></span></p>
### Vue Awesome Swiper - Image Slider
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Quill editor component for Vue, support SPA and SSR.</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/carousel"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://surmon-china.github.io/vue-awesome-swiper/"><span class="s3">Documentation</span></a></span></p>
### Vue Clipboard
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;A simple vue2 binding to clipboard.js</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/clipboard"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/Inndy/vue-clipboard2"><span class="s3">Documentation</span></a></span></p>
### Vue ACL
<p class="p2"><span class="s2"><strong>Description:</strong>&nbsp;Help you to control the permission of access in your app for yours components and routes</span></p>
<p class="p2"><span class="s2"><strong>Demo:</strong>&nbsp;<a href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/extensions/access-control-editor"><span class="s3">Visit</span></a></span></p>
<p class="p5"><span class="s4"><strong>Docs:</strong>&nbsp;<a href="https://github.com/leonardovilarinho/vue-acl"><span class="s3">Documentation</span></a></span></p>
