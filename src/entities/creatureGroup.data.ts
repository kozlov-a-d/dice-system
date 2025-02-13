import CreatureGroup from './creatureGroup.entity';

const CreatureGroupData = (() => {
    const groupKey = ['humanoid', 'aberration', 'animal', 'construct', 'dragon'];

    const groups: CreatureGroup[] = [];
    groupKey.forEach((key) => {
        groups.push(new CreatureGroup({ title: key }));
    });

    const groupList = (() => {
        const groupList = groups.reduce<Record<string, CreatureGroup>>((acc, group) => {
            acc[group.title] = group;
            return acc;
        }, {});
        return groupList;
    })();

    return Object.freeze({
        getKeys: groupKey,
        getArray: groups,
        getList: groupList,
    });
})();

export default CreatureGroupData;
