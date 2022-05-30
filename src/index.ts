import { DemoOptions } from './index.d.ts';

export default class Demo {
    constructor(options: DemoOptions) {
        this.options = options;
        this.renderNode(options);
    }

    renderNode(options) {
        console.log(options);
    }
}