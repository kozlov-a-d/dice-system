import attributeData from '@/entities/attribute.data';

export default class AttributesValue {
    [key: string]: number;

    constructor(data: { [key: string]: number }) {
        attributeData.getKeys.forEach((key) => {
            this[key] = data[key] || 1;
        });
    }
}
