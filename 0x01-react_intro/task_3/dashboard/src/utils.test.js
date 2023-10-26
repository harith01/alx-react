import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';


test('Returns this year', ()=> {
    expect(getFullYear()).toBe(2023);
});

test('Returns Holberton School', ()=> {
    expect(getFooterCopy(true)).toBe("Holberton school");
});

test('Returns Holberton School main dashboard', ()=> {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test('Checking getLatestNotification', ()=> {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
