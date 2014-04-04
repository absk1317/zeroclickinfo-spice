function ddg_spice_rand_word(api_result) {
    if (!api_result.word) return;

    Spice.add({
        data             : api_result,
        sourceUrl       : 'http://wordnik.com',
        sourceName      : 'Wordnik',
        templates: {
            item: Spice.rand_word.rand_word,
            detail: Spice.rand_word.rand_word
        },
    });
}
