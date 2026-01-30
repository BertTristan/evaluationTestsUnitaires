import { describe, test, expect, beforeEach } from 'vitest';
import { HtmlFormatHelper } from '../src/HtmlFormatHelper';

describe('HtmlFormatHelper', () => {
    let helper: HtmlFormatHelper;

    beforeEach(()=>{
        helper = new HtmlFormatHelper();
    });

    describe('getBoldFormat', ()=>{
        test.each([
            ["test", "<b>test</b>"],
            ["Hello World", "<b>Hello World</b>"],
            ["", "<b></b>"]
        ])("Retourner '%s' en gras doit donner '%s'", (content: string, result: string)=>{
            const helperResult = helper.getBoldFormat(content);
            expect(helperResult).toBe(result);
        });
    });

    describe('getItalicFormat', ()=>{
        test.each([
            ["test", "<i>test</i>"],
            ["Hello World", "<i>Hello World</i>"],
            ["", "<i></i>"]
        ])("Retourner '%s' en italic doit donner '%s'", (content: string, result: string)=>{
            const helperResult = helper.getItalicFormat(content);
            expect(helperResult).toBe(result);
        });
    });

    describe('getFormattedListElements', ()=>{
        test.each([
            [["test"], "<ul><li>test</li></ul>"],
            [["Hello", "World", " !"], "<ul><li>Hello</li><li>World</li><li> !</li></ul>"],
            [[], "<ul></ul>"]
        ])("Formater la liste %s doit donner %s", (content: string[], result: string)=>{
            const helperResult = helper.getFormattedListElements(content);
            expect(helperResult).toBe(result);
        });
    });
});
