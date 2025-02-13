export default class Skill {
    title: string;
    description: string;
    group: string;
    constructor(data: { title: string; description: string; group: string }) {
        this.title = data.title;
        this.description = data.description;
        this.group = data.group;
    }
}
