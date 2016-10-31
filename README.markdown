# Google Image Chart URL Generator

A small JS library to generate URLs to Googles Image Charts. It was build to run on [Podio](http://podio.com)s calculation field which is a sandboxed Node container. But it doesn't depend on any Podio specific features.

# How to use it
In Podio you have to copy and paste it in the calculation field, then follow the NodeJS example (except the require line since it's already inline). For use in browsers, please see the example folder.

# TODO
 - [x] Override default options
 - [ ] Example with markers
 - [ ] Add method setOption(key, value)
 - [x] example file on how to use it, both in regular JS and Podio
 - [x] Make it compatible as a Node module
 
# Deprecation Warning

Google has deprecated Image Charts, which means this library will stop working in the future, too. If you like, you can check out https://image-charts.com/, which is designed to be a drop-in replacement for Google's service.
