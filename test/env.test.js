const expect = require('expect');

describe('ENV', () => {
    it('should load all variables in .env file', () => {
        require('../lib').config(__dirname + '/.env');

        expect(process.env.PORT).toBe('3000');
        expect(process.env.HOSTNAME).toBe('test');
        expect(process.env.DB_USER).toBe('test');
        expect(process.env.DB_PASS).toBe('123456');
    });
});