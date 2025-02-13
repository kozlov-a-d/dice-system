<script lang="ts">
import { defineComponent } from 'vue';
import Character from '@/entities/character.entity';
import CreatureTypeData from '@/entities/creatureType.data';
import CharacterSheetAttributes from '@/components/CharacterSheet/attributes.vue';
import CharacterSheetSkills from '@/components/CharacterSheet/skills.vue';

export default defineComponent({
    name: 'CharacterSheet',
    components: { CharacterSheetAttributes, CharacterSheetSkills },
    data() {
        return {
            character: new Character({
                name: 'John Doe',
                creatureType: CreatureTypeData.getList.human,
            }),
        };
    },
});
</script>

<template>
    <div class="character-sheet">
        <h1>Character Sheet</h1>
        <!-- <div>{{ character }}</div>
        <div>{{ character.attributesValue.total }}</div> -->
        <CharacterSheetAttributes
            :attributes="character.attributesValue"
            :hitPoints="character.hitPoints"
            :willpower="character.willpower"
        />
        <CharacterSheetSkills />
    </div>
</template>

<style lang="scss" scoped>
.character-sheet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
