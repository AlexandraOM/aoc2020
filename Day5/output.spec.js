const {part1, findSeatNumber} = require('./output')
describe('', () => {
    it('BFFFBBFRRR: row 70, column 7, seat ID 567.', () => {
        expect(findSeatNumber('BFFFBBFRRR')).toBe(567)
    })
    it('FFFBBBFRRR: row 14, column 7, seat ID 119.', () => {
        expect(findSeatNumber('FFFBBBFRRR')).toBe(119)
    })
    it('BBFFBBFRLL: row 102, column 4, seat ID 820.', () => {
        expect(findSeatNumber('BBFFBBFRLL')).toBe(820)
    })

    it('finds highest number', () => {
        expect(part1(['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'])).toBe(820)
    })
})

