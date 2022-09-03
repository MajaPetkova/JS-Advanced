const { expect } = require('chai');
const rgbToHexColor = require('./index');

describe('RGB Converter', () => {
    describe('Happy Path', () => {
        it('convert white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
        });
        it('convert black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
        })
        it('convert other color', () => {
            expect(rgbToHexColor(57, 99, 68)).to.equal('#396344')
        });
    });

    describe('Invalid Parametars', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });
        it('returns undefined for invalid parametes type', () => {
            expect(rgbToHexColor("256", "256", 256)).to.be.undefined;
        });
    });
})