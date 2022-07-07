export const uuidv4 = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (item) => {
        const random = (Math.random() * 16) | 0;
        const value = item === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

type BaseType = { id: string };
export const updateItemInList = <T extends BaseType>(item: T, list: T[]): T[] => {
    const listCopy = [...list];

    const itemIndex = listCopy.findIndex((it) => it.id === item.id);
    if (itemIndex === -1) return list;

    listCopy[itemIndex] = item;

    return listCopy;
};
