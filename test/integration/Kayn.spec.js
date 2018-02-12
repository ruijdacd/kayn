import { expect, should, assert } from 'chai'

import { BasicJSCache, RedisCache, Kayn } from '../../lib/Kayn'

describe('Kayn', function() {
    this.timeout(0)

    describe('Caching', function() {
        it('BasicJSCache', function() {
            const kayn = Kayn('1234')({
                cacheOptions: {
                    cache: new BasicJSCache(),
                },
            })
            kayn.config.cacheOptions.cache.set(
                { key: 'cache-test', ttl: 5 },
                { foo: 'bar' },
            )
            kayn.config.cacheOptions.cache.get({ key: 'cache-test' }, function(
                err,
                data,
            ) {
                expect(err).to.be.null
                expect(data).to.not.be.null
                expect(data).to.deep.equal({ foo: 'bar' })

                kayn.flushCache()
                expect(kayn.config.cacheOptions.cache.cache).to.deep.equal({})
                kayn.config.cacheOptions.cache.get(
                    { key: 'cache-test' },
                    function(err, data) {
                        expect(err).to.not.be.null
                        expect(data).to.be.null
                    },
                )
            })
        })

        it('RedisCache', function(done) {
            const kayn = Kayn('1234')({
                cacheOptions: {
                    cache: new RedisCache(),
                },
            })
            kayn.config.cacheOptions.cache.set(
                { key: 'cache-test', ttl: 5 },
                { foo: 'bar' },
            )
            kayn.config.cacheOptions.cache.get({ key: 'cache-test' }, function(
                err,
                data,
            ) {
                expect(err).to.be.null
                expect(data).to.not.be.null
                expect(data).to.deep.equal({ foo: 'bar' })

                kayn.flushCache(function(err, succeeded) {
                    expect(err).to.be.null
                    expect(succeeded).to.equal('OK')
                    done()
                })
            })
        })

        describe.only('TTLs', function() {
            it('should set defaults', function() {
                const kayn = Kayn('cacher')({
                    cacheOptions: {
                        cache: new BasicJSCache(),
                        timeToLives: {
                            useDefault: true,
                        },
                    },
                })

                expect(kayn.config.cacheOptions.ttls).to.deep.equal({})
            })

            it('should override defaults with specifics', function() {})

            it('should override defaults with groups', function() {})

            it('should override defaults and groups with specifics', function() {})

            it('should have no ttls without default=true', function() {})
        })
    })
})
