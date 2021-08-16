const _data = require('../data')


async function notFoundPageHandler() {

    let headHTML = await _data.readTemplateHTML('head');

    headHTML = headHTML.replace('{{page-css}}', '404-page')

    return `<!DOCTYPE html>
            <html lang="en">
                ${headHTML}
                <body>
                <div>
                    <h1>404 page</h1>
                    <p>Return to <a href="/">home</a> page</p>
                </div>
                </body>

            </html>`;
}

module.exports = notFoundPageHandler;