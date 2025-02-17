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
* Enum class Strategy.
* @enum {}
* @readonly
*/
export default class Strategy {
    
        /**
         * value: "RANDOM"
         * @const
         */
        "RANDOM" = "RANDOM";

    
        /**
         * value: "GREEDY"
         * @const
         */
        "GREEDY" = "GREEDY";

    
        /**
         * value: "MOBILITY"
         * @const
         */
        "MOBILITY" = "MOBILITY";

    
        /**
         * value: "CORNER_AND_MOBILITY"
         * @const
         */
        "CORNER_AND_MOBILITY" = "CORNER_AND_MOBILITY";

    

    /**
    * Returns a <code>Strategy</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Strategy} The enum <code>Strategy</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

