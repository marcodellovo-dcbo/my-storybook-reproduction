import {Component, Input} from "@angular/core";

@Component({
    selector: 'storybook-bug',
    template: `<div>{{correctAnswers.join()}}</div>`,
})
export default class BugComponent {
    @Input() correctAnswers: string[] = [];
}
