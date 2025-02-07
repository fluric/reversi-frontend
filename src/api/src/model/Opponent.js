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
import Color from './Color';
import Strategy from './Strategy';

/**
 * The Opponent model module.
 * @module model/Opponent
 * @version 1.0.0
 */
class Opponent {
    /**
     * Constructs a new <code>Opponent</code>.
     * @alias module:model/Opponent
     */
    constructor() { 
        
        Opponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Opponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Opponent} obj Optional instance to populate.
     * @return {module:model/Opponent} The populated <code>Opponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Opponent();

            if (data.hasOwnProperty('strategy')) {
                obj['strategy'] = Strategy.constructFromObject(data['strategy']);
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = Color.constructFromObject(data['color']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Opponent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Opponent</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/Strategy} strategy
 */
Opponent.prototype['strategy'] = undefined;

/**
 * @member {Number} depth
 */
Opponent.prototype['depth'] = undefined;

/**
 * @member {module:model/Color} color
 */
Opponent.prototype['color'] = undefined;






export default Opponent;

