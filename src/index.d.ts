export interface LoadJsonResult<T = any> {
  ok: boolean;
  data: T | null;
  error?: string;
}

export interface SaveJsonResult {
  ok: boolean;
  error: string | null;
}

export interface LoadJsonOptions {
  fileName: string;
  encoding?: string;
}

export interface SaveJsonOptions {
  fileName: string;
  content: any;
  encoding?: string;
}

/**
 * Loads and parses a JSON file
 * @param options - Configuration options for loading the JSON file
 * @returns Result object with success status, data, and potential error message
 */
export declare function loadJson<T = any>(
  options: LoadJsonOptions
): LoadJsonResult<T>;

/**
 * Saves data as a JSON file
 * @param options - Configuration options for saving the JSON file
 * @returns Result object with success status and potential error message
 */
export declare function saveJson(options: SaveJsonOptions): SaveJsonResult;
