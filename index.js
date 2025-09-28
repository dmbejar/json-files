import fs from 'fs';

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