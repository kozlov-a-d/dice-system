<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NDrawer, NDrawerContent } from 'naive-ui';
import SkillData from '@/entities/skill.data';

export default defineComponent({
    name: 'CharacterSheetSkills',
    components: { NDrawer, NDrawerContent },
    data() {
        return {
            show: ref(false),
            screenWidth: window.innerWidth,
            skills: SkillData.getArray,
            skillsList: SkillData.getList,
            groups: SkillData.getGroup,
            groupsOrder: ['physical', 'common', 'combat', 'social', 'information', 'knowledge'],
            showSkill: '',
        };
    },
    computed: {
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
        handlerShowSkill(skillTitle: string): void {
            this.show = true;
            this.showSkill = skillTitle;
        },
        getSkillsByGroup(group: string) {
            return this.skills.filter((skill) => skill.group === group).filter((skill) => skill.group !== 'profession');
        },
    },
});
</script>

<template>
    <div class="character-sheet-skills">
        <h2>Skills</h2>
        <div class="character-sheet-skills__group">
            <div class="character-sheet-skills__list">
                <div v-for="group in groupsOrder" :key="group" class="character-sheet-skills__group">
                    <h3 class="character-sheet-skills__group-item-title">{{ group.toUpperCase() }}</h3>
                    <div
                        v-for="skill in getSkillsByGroup(group)"
                        :key="skill.title"
                        class="character-sheet-skills__item"
                    >
                        <span class="character-sheet-skills__item-title" @click="handlerShowSkill(skill.title)">{{
                            skill.title
                        }}</span>
                        <span class="character-sheet-skill__item-value">1</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="character-sheet-skills__list">
            <div v-for="skill in skills" :key="skill.title" class="character-sheet-skills__item">
                <span class="character-sheet-skills__item-title">{{ skill.title }}</span>
                <span class="character-sheet-skill__item-value">1</span>
            </div>
        </div> -->
        <n-drawer v-model:show="show" :width="drawerWidth">
            <n-drawer-content :title="skillsList[showSkill].title" :native-scrollbar="false" closable>
                {{ skillsList[showSkill].description }}
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<style lang="scss" scoped>
.character-sheet-skills {
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

    &__group {
        display: inline-block;
        width: 100%;
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
