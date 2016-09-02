import jquery from 'jquery';

// after hours of trying to get foundation to work
// well as modules (./foundation.js) exporting jquery
// to window was the only thing to work - workaround for now

window.jQuery = jquery;
