function isValueNotEmpty(objKey) {
    return objKey !== null && typeof objKey !== 'undefined' & objKey != ""
}


module.exports = {
    convertObjJsonToArray: function (objectJson = {}) {
        const arrayObject = [];
        for (let object in objectJson) {
            if (objectJson.hasOwnProperty(object))
                arrayObject.push(objectJson[object]);
        }
        return arrayObject;
    },
    validateFieldsRequired: function (obj, fields) {
        const result = {};
        fields.forEach(field => {
            if (!isValueNotEmpty(obj[field]))
                result[field] = `Field '${field}' is required`;
        });
        return result;
    },
    isValidDate: function(d) {
        return d instanceof Date && !isNaN(d);
    }
}   