<script lang="ts">
import { defineComponent } from 'vue';
import CharacterSheet from '@/components/CharacterSheet/index.vue';

export default defineComponent({
    name: 'CharacterSheetView',
    components: { CharacterSheet },
    props: {},
});
</script>

<template>
    <div>
        <CharacterSheet />
    </div>
</template>

<style lang="scss"></style>
