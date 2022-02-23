const { defineComponent } = require('san');
const { compileToRenderer } = require('san-ssr');
const express = require('express');
const chalk = require('chalk');

const app = require('./dist/server_bundle').default;
const render = compileToRenderer(defineComponent(app));
const html = render({ count: 1 }); 

const server = express();
server.use('/dist', express.static('./dist'))

server.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="module" src="/dist/client_bundle.js"></script>
      </head>
      <body>
        ${html}
      </body>
    </html>
    `);
});

server.listen(3000, () => {
    console.log(
        'App runing at:',
        `Local: ${ chalk.blueBright.underline('http://localhost:3000') }`
    )
});
