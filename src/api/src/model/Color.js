/**
 * Reversi API
 * API for Reversi game
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class Color.
* @enum {}
* @readonly
*/
export default class Color {
    
        /**
         * value: "WHITE"
         * @const
         */
        "WHITE" = "WHITE";

    
        /**
         * value: "BLACK"
         * @const
         */
        "BLACK" = "BLACK";

    

    /**
    * Returns a <code>Color</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Color} The enum <code>Color</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

