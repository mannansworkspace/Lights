const storyblokTableParser = (content: any) => {
    if (!content || content.fieldtype !== "table")
        return null
    const { thead, tbody } = content;
    if(!tbody[0]){
        return null
    }
    const isEmpty = !thead.length || thead.every(({ value }: any) => !value)
    if (isEmpty) {
        return null
    }
    const result: any = {}
    const { body } = tbody[0]
    thead.map(({ value }: any, index: number) => {
        result[value] = body[index].value
    })
    return result
};
export default storyblokTableParser;