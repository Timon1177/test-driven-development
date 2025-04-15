import { isValid } from './isbn13';

test('Valid ISBN-13: 9780134190440', () => {
    expect(isValid('9780134190440')).toBe(true);
}   );
test('Valid ISBN-13: 978-0-13-419044-0', () => {
    expect(isValid('9780134190440')).toBe(true);
});
test('Valid ISBN-13: 9780134190440', () => {
    expect(isValid('9780134190440')).toBe(true);
}
);      
test('Invalid ISBN-13: 9780134190441', () => {
    expect(isValid('9780134190441')).toBe(false);
});