<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';
import { NDrawer, NDrawerContent } from 'naive-ui';
import type { ICharacterAttributesValue } from '@/entities/character.entity';
import AttributeData from '@/entities/attribute.data';

export default defineComponent({
    name: 'CharacterSheetAttributes',
    components: { NDrawer, NDrawerContent },
    props: {
        attributes: { type: Object as PropType<ICharacterAttributesValue>, required: true },
        hitPoints: { type: Object as PropType<{ current: number; max: number }>, required: true },
        willpower: { type: Object as PropType<{ current: number; max: number }>, required: true },
    },
    data() {
        return {
            attributeData: AttributeData,
            screenWidth: window.innerWidth,
            show: ref(false),
            showAttribute: AttributeData.getList.strength.title,
        };
    },
    computed: {
        attributesKeys() {
            return this.attributeData.getKeys;
        },
        drawerWidth(): string | number {
            return this.screenWidth > 820 ? 768 : '90%';
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize(): void {
            this.screenWidth = window.innerWidth;
        },
        handlerShowAttribute(attributeTitle: string): void {
            this.show = true;
            this.showAttribute = attributeTitle;
        },
    },
});
</script>

<template>
    <div class="character-sheet-attributes">
        <h2>Attributes</h2>
        <div class="character-sheet-attributes__list">
            <div v-for="key in attributesKeys" :key="key" class="character-sheet-attributes__item">
                <span @click="handlerShowAttribute(key)" class="character-sheet-attributes__item-title">{{ key }}</span>
                <span class="character-sheet-attributes__item-value">{{ attributes.total[key] }}</span>
            </div>
        </div>
        <div class="character-sheet-attributes__list -advanced">
            <div class="character-sheet-attributes__item">
                <span class="character-sheet-attributes__item-title">Hit Points</span>
                <span class="character-sheet-attributes__item-value">{{ hitPoints.current }}/{{ hitPoints.max }}</span>
            </div>
            <div class="character-sheet-attributes__item">
                <span class="character-sheet-attributes__item-title">Willpower</span>
                <span class="character-sheet-attributes__item-value">{{ willpower.current }}/{{ willpower.max }}</span>
            </div>
        </div>
        <n-drawer v-model:show="show" :width="drawerWidth">
            <n-drawer-content :title="attributeData.getList[showAttribute].title" :native-scrollbar="false" closable>
                {{ attributeData.getList[showAttribute].description }}
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<style lang="scss" scoped>
.character-sheet-attributes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__list {
        width: 100%;
        column-count: 3;
        column-gap: 3rem;

        &.-advanced {
            margin-top: 1rem;
            column-count: 2;
            @media screen and (min-width: 820px) {
                width: 80%;
                margin-left: auto;
                margin-right: auto;
            }
        }

        @media screen and (max-width: 820px) {
            column-count: 1;
        }
    }

    &__item {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        background: rgb(24, 24, 28);
        border: 1px solid rgb(45 45 48);
        border-radius: 4px;

        &-title {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
