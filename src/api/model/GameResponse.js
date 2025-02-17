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
import BoardInfo from './BoardInfo';
import GameResponseNextMovesInner from './GameResponseNextMovesInner';
import Move from './Move';

/**
 * The GameResponse model module.
 * @module model/GameResponse
 * @version 1.0.0
 */
class GameResponse {
    /**
     * Constructs a new <code>GameResponse</code>.
     * @alias module:model/GameResponse
     */
    constructor() { 
        
        GameResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GameResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameResponse} obj Optional instance to populate.
     * @return {module:model/GameResponse} The populated <code>GameResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GameResponse();

            if (data.hasOwnProperty('boardInfo')) {
                obj['boardInfo'] = BoardInfo.constructFromObject(data['boardInfo']);
            }
            if (data.hasOwnProperty('lastMove')) {
                obj['lastMove'] = Move.constructFromObject(data['lastMove']);
            }
            if (data.hasOwnProperty('nextMoves')) {
                obj['nextMoves'] = ApiClient.convertToType(data['nextMoves'], [GameResponseNextMovesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GameResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GameResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `boardInfo`
        if (data['boardInfo']) { // data not null
          BoardInfo.validateJSON(data['boardInfo']);
        }
        // validate the optional field `lastMove`
        if (data['lastMove']) { // data not null
          Move.validateJSON(data['lastMove']);
        }
        if (data['nextMoves']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nextMoves'])) {
                throw new Error("Expected the field `nextMoves` to be an array in the JSON data but got " + data['nextMoves']);
            }
            // validate the optional field `nextMoves` (array)
            for (const item of data['nextMoves']) {
                GameResponseNextMovesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/BoardInfo} boardInfo
 */
GameResponse.prototype['boardInfo'] = undefined;

/**
 * @member {module:model/Move} lastMove
 */
GameResponse.prototype['lastMove'] = undefined;

/**
 * @member {Array.<module:model/GameResponseNextMovesInner>} nextMoves
 */
GameResponse.prototype['nextMoves'] = undefined;






export default GameResponse;

