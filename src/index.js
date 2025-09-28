import fs from 'fs';

/**
 * @typedef {Object} LoadJsonOptions
 * @property {string} fileName - Path to the JSON file
 * @property {string} [encoding='utf-8'] - File encoding
 */

/**
 * @template T
 * @typedef {Object} LoadJsonResult
 * @property {boolean} ok - Whether the operation was successful
 * @property {T|null} data - Parsed JSON data if successful, null otherwise
 * @property {string} [error] - Error message if the operation failed
 */

/**
 * @typedef {Object} SaveJsonOptions
 * @property {string} fileName - Path where to save the JSON file
 * @property {any} content - Data to save as JSON
 * @property {string} [encoding='utf-8'] - File encoding
 */

/**
 * @typedef {Object} SaveJsonResult
 * @property {boolean} ok - Whether the operation was successful
 * @property {string|null} error - Error message if the operation failed, null otherwise
 */

/**
 * Loads and parses a JSON file
 * @template T
 * @param {LoadJsonOptions} options - Configuration options for loading the JSON file
 * @returns {LoadJsonResult<T>} Result object with success status, data, and potential error message
 */
export const loadJson = ({ fileName, encoding = 'utf-8' }) => {
    if (!fs.existsSync(fileName)) {
        return {
            ok: false,
            data: null,
            error: `File '${fileName}' not found.`,
        }
    }

    const bulkContent = fs.readFileSync(fileName, encoding);

    try {
        return {
            ok: true,
            data: JSON.parse(bulkContent),
        };
    } catch (error) {
        return {
            ok: false,
            data: null,
            error: `Error parsing file '${fileName}': ${error.message}`,
        };
    }
};

/**
 * Saves data as a JSON file
 * @param {SaveJsonOptions} options - Configuration options for saving the JSON file
 * @returns {SaveJsonResult} Result object with success status and potential error message
 */
export const saveJson = ({ fileName, content, encoding = 'utf-8' }) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(content, null, 2), encoding);
        return {
            ok: true,
            error: null,
        };
    } catch (error) {
        return {
            ok: false,
            error: `Error saving file '${fileName}': ${error.message}`,
        };
    }
};