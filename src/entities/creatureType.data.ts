import CreatureType from '@/entities/creatureType.entity';
import CreatureSizeData from '@/entities/creatureSize.data';
import CreatureGroupData from '@/entities/creatureGroup.data';
import AttributesValue from '@/entities/attributesValue.entity';

const CreatureTypeData = (() => {
    const creatureTypes: CreatureType[] = [];

    creatureTypes.push(
        new CreatureType({
            title: 'human',
            creatureSize: CreatureSizeData.getList.medium,
            creatureGroup: CreatureGroupData.getList.humanoid,
            attributesValue: new AttributesValue({
                strength: 2,
                dexterity: 2,
                stamina: 2,
                charisma: 2,
                manipulation: 2,
                composure: 2,
                intelligence: 2,
                wits: 2,
                resolve: 2,
            }),
        }),
    );
    creatureTypes.push(
        new CreatureType({
            title: 'elf',
            creatureSize: CreatureSizeData.getList.medium,
            creatureGroup: CreatureGroupData.getList.humanoid,
            attributesValue: new AttributesValue({
                strength: 1,
                dexterity: 3,
                stamina: 1,
                charisma: 2,
                manipulation: 2,
                composure: 2,
                intelligence: 3,
                wits: 3,
                resolve: 2,
            }),
        }),
    );

    const getCreatureTypeList = (() => {
        const creatureTypeList = creatureTypes.reduce<Record<string, CreatureType>>((acc, creatureType) => {
            acc[creatureType.title] = creatureType;
            return acc;
        }, {});
        return creatureTypeList;
    })();

    return Object.freeze({
        getArray: creatureTypes,
        getList: getCreatureTypeList,
    });
})();

export default CreatureTypeData;
