import CreatureSize from '@/entities/creatureSize.entity';
import type CreatureGroup from '@/entities/creatureGroup.entity';
import AttributesValue from '@/entities/attributesValue.entity';

export default class CreatureType {
    title: string;
    creatureSize: CreatureSize;
    creatureGroup: CreatureGroup;
    attributesValue: AttributesValue;
    constructor(data: {
        title: string;
        creatureSize: CreatureSize;
        creatureGroup: CreatureGroup;
        attributesValue: AttributesValue;
    }) {
        this.title = data.title;
        this.creatureSize = data.creatureSize;
        this.creatureGroup = data.creatureGroup;
        this.attributesValue = data.attributesValue;
    }
}
