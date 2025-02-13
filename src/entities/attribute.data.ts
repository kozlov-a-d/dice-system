import Attribute from '@/entities/attribute.entity';

export type TAttributeKey =
    | 'strength'
    | 'dexterity'
    | 'stamina'
    | 'charisma'
    | 'manipulation'
    | 'composure'
    | 'intelligence'
    | 'wits'
    | 'resolve';

const AttributeData = (() => {
    const data: { title: TAttributeKey; description: string }[] = [
        { title: 'strength', description: 'The ability to exert physical force.' },
        { title: 'dexterity', description: 'The ability to move quickly and easily.' },
        { title: 'stamina', description: 'The ability to withstand physical stress.' },
        { title: 'charisma', description: 'The ability to influence others.' },
        { title: 'manipulation', description: 'The ability to manipulate others.' },
        { title: 'composure', description: 'The ability to remain calm and composed.' },
        { title: 'intelligence', description: 'The ability to understand and reason.' },
        { title: 'wits', description: 'The ability to perceive and understand.' },
        { title: 'resolve', description: 'The ability to persevere and endure.' },
    ];

    const attributeKey = data.map((attribute) => attribute.title);

    const attributes: Attribute[] = [];
    data.forEach((attr) => {
        attributes.push(new Attribute({ title: attr.title, description: attr.description }));
    });

    const attributeList = (() => {
        const attributeList = attributes.reduce<Record<string, Attribute>>((acc, attribute) => {
            acc[attribute.title] = attribute;
            return acc;
        }, {});
        return attributeList;
    })();

    return Object.freeze({
        getKeys: attributeKey,
        getArray: attributes,
        getList: attributeList,
    });
})();

export default AttributeData;
