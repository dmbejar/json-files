# @dmbejar/json-files

Easy manipulation for JSON files in Node.js with full TypeScript support.

## Installation

```bash
npm install @dmbejar/json-files
```

## Usage

### JavaScript/ES Modules
```javascript
import { loadJson, saveJson } from "@dmbejar/json-files";

// Load a JSON file
const result = loadJson({ fileName: "data.json" });
if (result.ok) {
  console.log("Data loaded:", result.data);
} else {
  console.error("Error:", result.error);
}

// Save data to a JSON file
const data = { name: "John", age: 30 };
const saveResult = saveJson({ fileName: "output.json", content: data });
if (saveResult.ok) {
  console.log("File saved successfully");
} else {
  console.error("Error:", saveResult.error);
}
```

### TypeScript
```typescript
import { loadJson, saveJson, LoadJsonResult } from "@dmbejar/json-files";

// Type-safe JSON loading with generic types
interface User {
  name: string;
  age: number;
  email?: string;
}

const result: LoadJsonResult<User> = loadJson<User>({ fileName: "user.json" });
if (result.ok) {
  // result.data is now typed as User | null
  console.log("User loaded:", result.data?.name);
} else {
  console.error("Error:", result.error);
}

// Saving with type safety
const userData: User = { name: "John", age: 30, email: "john@example.com" };
const saveResult = saveJson({ fileName: "user.json", content: userData });
```

## API

### loadJson({ fileName, encoding = 'utf-8' })

Loads and parses a JSON file.

**Parameters:**

- `fileName` (string): Path to the JSON file
- `encoding` (string, optional): File encoding, defaults to 'utf-8'

**Returns:**

- `ok` (boolean): Whether the operation was successful
- `data` (object|null): Parsed JSON data if successful, null otherwise
- `error` (string|undefined): Error message if the operation failed

### saveJson({ fileName, content, encoding = 'utf-8' })

Saves data as a JSON file.

**Parameters:**

- `fileName` (string): Path where to save the JSON file
- `content` (object): Data to save as JSON
- `encoding` (string, optional): File encoding, defaults to 'utf-8'

**Returns:**

- `ok` (boolean): Whether the operation was successful
- `error` (string|null): Error message if the operation failed, null otherwise

## Requirements

- Node.js >= 14.0.0

## License

MIT © Diego Manuel Béjar
