import md5 from "crypto-js/md5";

test('md5', () => {
    expect(md5('Hello').toString()).toBe('8b1a9953c4611296a827abf8c47804d7')
})