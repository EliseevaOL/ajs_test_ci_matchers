import getSortedHealth from '../sorted';

test('Checking the correctness of the sorting', () => {
    const listData = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]

    const sortedListData = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]
    expect(getSortedHealth(listData)).toEqual(sortedListData);
})