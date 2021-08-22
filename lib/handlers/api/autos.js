const _data = require('../../data');
const helpers = require('../../helpers');

const handlers = {}

handlers.autos = (data, callback) => {
    const acceptableMethods = ['get', 'post', 'put', 'delete'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return handlers._autos[data.httpMethod](data, callback);
    }

    return callback(405, { error: 'Nepriimtinas uzklausos metodas' })
}

handlers._autos = {}

handlers._autos.get = async (data, callback) => {
    //gaunam autos informacija

    const regNumber = data.queryStringObject.get('regNumber');

    if (regNumber === '') {
        return callback(400, {
            error: 'Nenurodytas valstybinis numeris'
        })
    }

    const content = await _data.read('autos', regNumber);
    if (content === '') {
        return callback(400, {
            error: 'Nurodytas automobilis nerastas'
        })
    }

    contentObj = helpers.parseJsonToObject(content);
    console.log(contentObj);

    return callback(200, {
        success: contentObj,
    })

}

handlers._autos.post = async (data, callback) => {
    //irasom autos informacija

    const { regNumber } = data.payload;
    // const autosObj = {
    //     regNumber,
    //     brand,
    //     model,
    //     color,
    // }
    console.log(regNumber);

    const result = await _data.create('autos', regNumber, data.payload);

    if (result !== true) {
        return callback(400, {
            error: `Nepavyko sukurti transporto priemones!`
        })
    }
    return callback(200, {
        success: 'Automobilis sukurtas sekmingai!'
    })

}

handlers._autos.put = async (data, callback) => {
    //atnaujinam autos informacija
    console.log('Informacija atkeliavo');

}

handlers._autos.delete = async (data, callback) => {
    //pasalinam autos informacija
    console.log('Informacija atkeliavo');

}

module.exports = handlers;
