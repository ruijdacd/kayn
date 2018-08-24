import {
    Kayn,
    REGIONS,
    METHOD_NAMES,
    BasicJSCache,
    LRUCache,
    RedisCache,
} from './'

/*
const redisCache = new RedisCache({
    host: 'localhost',
    port: 5000,
    keyPrefix: 'kayn',
});
*/

const myCache = new LRUCache({ max: 5 })

const kayn = Kayn()({
    region: 'na',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
    },
    cacheOptions: {
        cache: myCache,
        ttls: {},
        timeToLives: {
            useDefault: true,
            byGroup: {
                STATIC: 1000,
                DDRAGON: 1,
            },
            byMethod: {
                [METHOD_NAMES.STATIC.GET_REFORGED_RUNE_PATH_LIST]: 5000,
                [METHOD_NAMES.STATIC.GET_REFORGED_RUNE_PATH_BY_ID]: 5000,
                [METHOD_NAMES.STATIC.GET_TARBALL_LINK]: 5000,
                [METHOD_NAMES.DDRAGON.RUNES_REFORGED_LIST]: 5000,
            },
        },
    },
})

import test from './examples/es5/verifying-a-summoner'

const main = async () => {
    try {
        await kayn.DDragon.RunesReforged.list()
            .version('8.15.1')
            .locale('en_US')
        await kayn.DDragon.RunesReforged.list()
            .version('8.15.1')
            .locale('en_US')
        setTimeout(async () => {
            await kayn.DDragon.RunesReforged.list()
                .version('8.15.1')
                .locale('en_US')
        }, 3000)
        setTimeout(async () => {
            await kayn.DDragon.RunesReforged.list()
                .version('8.15.1')
                .locale('en_US')
        }, 5000)
    } catch (ex) {
        console.log(ex)
    }
    console.log('hello, keep running')
}

main()
