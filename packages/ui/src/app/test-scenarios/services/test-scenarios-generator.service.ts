import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';
// const response = require('./response.example.json'); 

@Injectable({
    providedIn: 'root',
})
export class TestScenariosGeneratorService {
    private openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            apiKey: environment['OPENAI_API_KEY'],
        });

        this.openai = new OpenAIApi(configuration);
    }

    public async generate(acceptanceCriteria: string): Promise<string[]> {
        const response = await this.openai.createCompletion({
            model: 'text-davinci-003',
            prompt: this.generatePrompt(acceptanceCriteria),
            temperature: 0,
			max_tokens: 500,
        });

		await new Promise(resolve => setTimeout(resolve, 4000));
        console.log(JSON.stringify(response.data, null, 2));

        return response.data.choices[0].text?.split('.\n')??[];
    }

    private generatePrompt(acceptanceCriteria: string) {
        return `Suggest five test scenarios for the next acceptance criteria:
		${acceptanceCriteria}`;
    }
}
