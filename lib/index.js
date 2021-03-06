/*
 *          _  .          .     +           .
 *        .(_)          .              *          '
 *        .   .      .    .   /               *        *
 *          .           .    /           +                 '*
 *    . .        .  .       /    .
 *        .  +       .     *
 *       .                   medior
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

const { decorate } = require( 'delgado' );
const {
    sanitize,
    sanitizeTopic,
    ensureTopic
} = require( './sanitize' );

const {
    subscribe: doSubscribe,
    unsubscribe: doUnsubscribe,
    publish: doPublish
} = require( './core' );

const subscribe = decorate( sanitize, ensureTopic, doSubscribe );

const unsubscribe = decorate( sanitize, doUnsubscribe );

const publish = decorate( sanitizeTopic, doPublish );

exports.publish = publish;
exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
