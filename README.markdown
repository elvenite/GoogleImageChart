# Google Image Chart URL Generator

A small JS library to generate URLs to Googles Image Charts. It was build to run on [Podio](http://podio.com)s calculation field which is a sandboxed Node container. But it doesn't depend on any Podio specific features.

The first version was built just to handle a specific use case which means that it does not have much options (actually there's no method to override the default settings) but this will hopefully change in the future.

Pull requests are welcome.

# How to use it
In Podio you have to copy and paste it in the calculation field, the same goes with Node JS, at least for now.

# TODO
 - [ ] Override default options
 - [ ] Add method setOption(key, value)
 - [x] example file on how to use it, both in regular JS and Podio
 - [x] Make it compatible as a Node module