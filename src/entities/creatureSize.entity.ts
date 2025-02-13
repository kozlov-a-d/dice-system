export default class CreatureSize {
    title: string;
    index: number;
    constructor(data: { title: string; index: number }) {
        this.title = data.title;
        this.index = data.index;
    }
}
