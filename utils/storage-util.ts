
export const saveStorage = (key: string, data: any[]): void => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getStorageItem = (key: string): any => {
    return JSON.parse(localStorage.getItem(key) || '[]')
}

