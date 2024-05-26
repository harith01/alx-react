import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('It returns the correct year', () => {
    expect(getFullYear()).toBe(2024)
})

test('It returns correct footer text', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
})

test('It returns the correct footer text', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('It returns the right notification', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})