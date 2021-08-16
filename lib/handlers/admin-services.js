const _data = require('../data')

async function adminServicesPageHandler() {

    let headHTML = await _data.readTemplateHTML('head');
    headHTML = headHTML.replace('{{page-css}}', 'admin-services')

    return `<!DOCTYPE html>
                <html lang="en">

                    ${headHTML}

                    <body>
                        SERVICES LIST
                    </body>

                </html>`;
}

module.exports = adminServicesPageHandler;