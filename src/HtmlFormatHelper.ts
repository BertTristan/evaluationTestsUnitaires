export class HtmlFormatHelper {
    public getBoldFormat(content: string): string {
        return `<b>${content}</b>`;
    }

    public getItalicFormat(content: string): string {
        return `<i>${content}</i>`;
    }

    // Plus difficile
    public getFormattedListElements(contents: string[]): string {
        let htmlList = '<ul>';

        contents.forEach(x => {
            htmlList += '<li>';
            htmlList += x;
            htmlList += '</li>';
        });

        htmlList += '</ul>';
        return htmlList;
    }
}
