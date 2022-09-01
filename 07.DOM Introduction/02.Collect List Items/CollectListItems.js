function extractText() {
    const items = document.getElementById('items').children;
    console.log(items)
    const result = [];

    for (const item of Array.from(items)) {
        result.push(item.textContent);
    }
    document.getElementById('result').textContent = result.join('\n')
}