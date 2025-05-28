export const setStorePoints = (section: string, points: number) => {
    localStorage.setItem(section, String(points));
}

export const getStorePoints = (section: string): number => {
    const points = localStorage.getItem(section);

    return points ? Number(points) : 0;
}

export const clearStore = () => {
    localStorage.clear();
}
