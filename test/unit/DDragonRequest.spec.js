import { expect, should, assert } from 'chai'

import DDragonRequest, {
    DDragonRequestTypes,
    ddragonRequestTypeToUrl,
} from '../../lib/RequestClient/DDragonRequest'

describe('DDragonRequest', function() {
    describe('ddragonRequestTypeToUrl', function() {
        const urlInformation = {
            endpoint: 'na.json',
        }
        const url = ddragonRequestTypeToUrl(
            DDragonRequestTypes.REALMS,
            urlInformation,
        )
        expect(url).to.equal(
            'https://ddragon.leagueoflegends.com/realms/na.json',
        )
    })
    it('should initialize correctly #1', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //const { config, methodName, payload } = request
        //expect(config).to.deep.equal(defaultConfig)
        //expect(methodName).to.deep.equal('abc')
        //expect(payload).to.deep.equal({
        //    method: 'GET',
        //    serviceName: 'summoner',
        //    endpoint: 'by-name/chaullenger',
        //    query: [],
        //    region: '',
        //    isTournament: false,
        //})
    })

    it('should initialize correctly #2', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //    'POST',
        //    null,
        //    { hello: 'world' },
        //    true,
        //)
        //const { config, methodName, payload } = request
        //expect(config).to.deep.equal(defaultConfig)
        //expect(methodName).to.deep.equal('abc')
        //expect(payload).to.deep.equal({
        //    method: 'POST',
        //    serviceName: 'summoner',
        //    endpoint: 'by-name/chaullenger',
        //    query: [],
        //    region: '',
        //    body: { hello: 'world' },
        //    isTournament: true,
        //})
    })

    it('should initialize correctly #3', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //    'PUT',
        //    null,
        //    { hello: 'world' },
        //    true,
        //)
        //const { config, methodName, payload } = request
        //expect(config).to.deep.equal(defaultConfig)
        //expect(methodName).to.deep.equal('abc')
        //expect(payload).to.deep.equal({
        //    method: 'PUT',
        //    serviceName: 'summoner',
        //    endpoint: 'by-name/chaullenger',
        //    query: [],
        //    region: '',
        //    body: { hello: 'world' },
        //    isTournament: true,
        //})
    })

    it('should add query parameters correctly', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //request.query({ key: 'value' })
        //expect(request.payload.query).to.deep.equal([{ key: 'value' }])
        //// Ensure that query is appended, and does not
        //// overwrite old query.
        //request.query({ key2: 'value2' })
        //expect(request.payload.query).to.deep.equal([
        //    { key: 'value' },
        //    { key2: 'value2' },
        //])
    })

    it('should throw if query is passed non-object', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //expect(() => request.query('notLikeThis')).to.throw()
        //expect(() => request.query(3)).to.throw()
        //expect(() => request.query(() => 'abc')).to.throw()
    })

    it('should set region correctly', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //request.region('na')
        //expect(request.payload.region).to.equal('na')
    })

    it('should throw if region is set twice', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //request.region('na')
        //expect(request.payload.region).to.equal('na')
        //expect(() => request.region('kr')).to.throw()
    })

    it('should throw on bad region', function() {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //expect(() => request.region('abcdefgjijklmnopqrstuvwxyz')).to.throw()
    })

    describe('regionNoThrow', function() {
        it('should not throw on bad region', function() {
            //const request = new Request(
            //    defaultConfig,
            //    'summoner',
            //    'by-name/chaullenger',
            //    'abc',
            //)
            //expect(() => request.regionNoThrow(null)).to.not.throw()
            //expect(() =>
            //    request.regionNoThrow({ hello: 'world' }),
            //).to.not.throw()
        })

        it('should fallback to default region', function() {
            //const request = new Request(
            //    defaultConfig,
            //    'summoner',
            //    'by-name/chaullenger',
            //    'abc',
            //)
            //expect(request.regionNoThrow(null).config.region).to.equal('na')
            //expect(
            //    request.regionNoThrow({ hello: 'world' }).config.region,
            //).to.equal('na')
        })
    })
})