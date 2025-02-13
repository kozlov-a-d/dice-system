import type CreatureType from '@/entities/creatureType.entity';
import attributeData from '@/entities/attribute.data';

export interface ICharacterAttributesValue {
    creatureType: { [key: string]: number };
    total: { [key: string]: number };
}

export default class Character {
    name: string | null;
    creatureType: CreatureType | null;
    hitPoints: { current: number; max: number };
    willpower: { current: number; max: number };
    constructor(data: { name?: string; creatureType?: CreatureType }) {
        this.name = data.name || null;
        this.creatureType = data.creatureType || null;
        this.hitPoints = { current: 0, max: 0 };
        this.willpower = { current: 0, max: 0 };
        this.updateCharacter();
    }

    changeName(name: string) {
        this.name = name;
    }

    changeCreatureType(creatureType: CreatureType) {
        this.creatureType = creatureType;
    }

    updateCharacter() {
        const total = this.attributesValue.total;
        this.hitPoints.max = total.strength + total.stamina * 2 + total.resolve;
        this.willpower.max = this.attributesValue.total.composure + this.attributesValue.total.resolve;
    }

    get attributesValue() {
        const result: ICharacterAttributesValue = {
            creatureType: {},
            total: {},
        };
        attributeData.getKeys.forEach((key) => {
            result.creatureType[key] = this.creatureType?.attributesValue[key] || 1;
            result.total[key] = result.creatureType[key];
        });
        return result;
    }
}
