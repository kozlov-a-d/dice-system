import Skill from '@/entities/skill.entity';

const SkillData = (() => {
    const data: { title: string; description: string; group: string }[] = [
        // Physical
        { title: 'athletics', description: 'Атлетика', group: 'physical' },
        { title: 'acrobatics', description: 'Акробатика.', group: 'physical' },
        { title: 'endurance', description: 'Стойкость', group: 'physical' },
        { title: 'sleightOfHand', description: 'Ловкость рук', group: 'physical' },
        { title: 'stealth', description: 'Скрытность', group: 'physical' },
        // { title: 'swim', description: 'Плавание', group: 'physical' },
        // { title: 'drive', description: 'Вождение', group: 'physical' },
        // Common
        { title: 'ride', description: 'Езда', group: 'common' },
        { title: 'crafting', description: 'Ремесло (простое)', group: 'common' },
        { title: 'firstAid', description: 'Первая помощь. Способность оказывать первую помощь.', group: 'common' },
        { title: 'animalHandling', description: 'Взаимодействие с животными', group: 'common' },
        // Сollection of information
        { title: 'perception', description: 'Наблюдательность. Слух.', group: 'information' },
        // { title: 'listen', description: 'Слух. Способность слышать и слышать детали.', group: 'information' },
        { title: 'research', description: 'Способность изучать и анализировать информацию.', group: 'information' },
        // { title: 'tracking', description: 'Слежка. Выслеживание', group: 'information' },
        { title: 'insight', description: 'Проницательность.', group: 'information' },
        // Social
        { title: 'persuasion', description: 'Убеждение', group: 'social' },
        { title: 'intimidation', description: 'Запугивание', group: 'social' },
        { title: 'deception', description: 'Обман', group: 'social' },
        { title: 'performance', description: 'Выступление', group: 'social' },
        { title: 'leadership', description: 'Лидерство', group: 'social' },
        // { title: 'etiquete', description: 'Этикет', group: 'social' }, // perk
        // { title: 'streetwise', description: 'Знание улиц', group: 'social' }, // perk
        // Combat
        { title: 'brawl', description: 'The ability to fight in close combat.', group: 'combat' },
        { title: 'melee', description: 'The ability to fight with melee weapons.', group: 'combat' },
        { title: 'range', description: 'The ability to fight with ranged weapons.', group: 'combat' },
        { title: 'spellMastery', description: 'TThe ability to use magic.', group: 'combat' },
        // { title: 'firearms', description: 'The ability to use firearms.', group: 'combat' },
        // { title: 'dodge', description: 'The ability to avoid physical attacks.', group: 'combat' },
        // уклонение - чистая ловкость (избегание урона, если кол-во успехов больше )
        // блокирование - чистая сила (требуется подходящее снаряжение, которое может давать бонусы, например, щит +10)
        // парирование -
        // Knowledge
        // { title: 'education', description: 'Образование', group: 'knowledge' },
        { title: 'nature', description: 'Природа', group: 'knowledge' },
        { title: 'history', description: 'История', group: 'knowledge' },
        { title: 'religion', description: 'Религия', group: 'knowledge' },
        { title: 'finance', description: 'Финансы', group: 'knowledge' },
        { title: 'law', description: 'Право', group: 'knowledge' },
        { title: 'magic', description: 'Магия', group: 'knowledge' },
        // { title: 'science', description: 'Наука', group: 'knowledge' },
        // { title: 'technology', description: 'Техника', group: 'knowledge' },
        // { title: 'occult', description: 'Оккультизм', group: 'knowledge' },
        // Language вынести в отдельную сущность, 1 - разговаривать, 2 читать и писать на бытовом уровен, 3 - понимать специфическую литературу/высокопарно излагать
        // { title: 'language', description: 'Язык', group: 'knowledge' },
        // Profession
        { title: 'trading', description: 'Торговля', group: 'profession' },
        { title: 'lockpicking', description: 'Взлом замков', group: 'profession' },
        { title: 'steal', description: 'Воровство', group: 'profession' },
        { title: 'herbalism', description: 'Травничество', group: 'profession' },
        { title: 'alchemy', description: 'Алхимия', group: 'profession' },
        { title: 'poisoner', description: 'Яды', group: 'profession' },
        { title: 'art', description: 'Художественные навыки', group: 'profession' },
        { title: 'acting', description: 'Актерское мастерство', group: 'profession' },
        { title: 'mining', description: 'Горное дело', group: 'profession' },
        { title: 'tailoring', description: 'Швейное дело', group: 'profession' },
        { title: 'woodworking', description: 'Деревообработка', group: 'profession' },
        { title: 'leatherworking', description: 'Кожевенное дело', group: 'profession' },
        { title: 'blacksmithing', description: 'Кузнечное дело', group: 'profession' },
        { title: 'artefactor', description: 'Артефактор', group: 'profession' },
        { title: 'medicine', description: 'Медицина. Способность лечить.', group: 'profession' },
        { title: 'surgery', description: 'Хирургия. Способность проводить операции.', group: 'profession' },
    ];

    const skillKey = data.map((skill) => skill.title);

    const skillGroup = data.map((skill) => skill.group).filter((group, index, self) => self.indexOf(group) === index);

    const skills: Skill[] = [];
    data.forEach((skill) => {
        skills.push(new Skill({ title: skill.title, description: skill.description, group: skill.group }));
    });

    const skillList = (() => {
        const skillList = skills.reduce<Record<string, Skill>>((acc, skill) => {
            acc[skill.title] = skill;
            return acc;
        }, {});
        return skillList;
    })();

    return Object.freeze({
        getGroup: skillGroup,
        getKeys: skillKey,
        getArray: skills,
        getList: skillList,
    });
})();

export default SkillData;
