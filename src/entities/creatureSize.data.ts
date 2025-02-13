import CreatureSize from '@/entities/creatureSize.entity';

const CreatureSizeData = (() => {
    const sizeKey = ['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan'];

    const sizes: CreatureSize[] = [];
    sizeKey.forEach((key, index) => {
        sizes.push(new CreatureSize({ title: key, index: index }));
    });

    const sizeList = (() => {
        const sizeList = sizes.reduce<Record<string, CreatureSize>>((acc, size) => {
            acc[size.title] = size;
            return acc;
        }, {});
        return sizeList;
    })();

    return Object.freeze({
        getKeys: sizeKey,
        getArray: sizes,
        getList: sizeList,
    });
})();

export default CreatureSizeData;
