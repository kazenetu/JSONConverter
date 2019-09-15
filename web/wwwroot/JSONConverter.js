/**
 * Simple JSONConverter for TypeScript
 * Copyright 2019, kazenetu
 * Released under the MIT License.
 */
export class JSONConverter {
    serialize(target) {
        return JSON.stringify(target);
    }
    deserialize(jsonString, newInstance) {
        return this.deserializeMapping(newInstance, JSON.parse(jsonString));
    }
    deserializeMapping(newInstance, jsonObject) {
        for (let itemName in jsonObject) {
            let itemObject = jsonObject[itemName];
            if (typeof itemObject === 'object') {
                this.deserializeMapping(newInstance[itemName], itemObject);
            }
            else {
                newInstance[itemName] = jsonObject[itemName];
            }
        }
        return newInstance;
    }
}
