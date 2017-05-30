![cf](http://i.imgur.com/7v5ASc8.png) 25: HTML DOC Tree
=====================================
```
Root:                 <!DOCTYPE html>
                             |
Node:                     <html>
              |                          |
Node:       <head>                    <body>
              |                |         |         |
Node:       <title>          <main>  <header>  <footer>
                               |         |         |
Node:                      <section>    <h2>      <p>
                               |         |
Node:                         <p>       <nav>
                                         |
Node                                    <ul>
                                   |    |    |    |
Node:                             <li> <li> <li> </li>
```
## Run Test
In terminal tab, enter:
1. `npm install` to install application resources.
2. `npm run test` to run tests using jasmine.

## Developer Resources
  * [Mocha](https://www.npmjs.com/package/mocha)
  * [Chai](https://www.npmjs.com/package/chai)
  * [Chai-http](http://chaijs.com/)
