// buildHtml.js
import fs from 'fs';
import HtmlMinifier from 'html-minifier';

const minifyConfig = {
  collapseWhitespace: true,
  html5: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  minifyJS: true,
};

const buildHtml = () => {
  const html = `
    <!doctype html>
    <html>
    <head>
    </head>
    <body>
      <div id="app-root">Hello</div>
      <script type=text/javascript src=/js/index.js defer=defer></script>
    </body>
    </html>
  `;
  const minifiedHtml = HtmlMinifier.minify(html, minifyConfig);
  const path = `${__dirname}/../../dist/client/html`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
    console.log(`/dist/client/html dir created.`);
  }
  fs.writeFileSync(`${path}/index.html`, minifiedHtml, 'utf8');
  return minifiedHtml;
};

export default buildHtml;
