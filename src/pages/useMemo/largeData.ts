const BIG_NUMBER = 30000;

export const largeData = new Array(BIG_NUMBER).fill(0).map((_, index) => {
    return {
        id: index,
        isActive: index === BIG_NUMBER - 10
    };
});