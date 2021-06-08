/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 * @invite inviteCode
 * @authorId 51512151151651
 * @authorLink https://twitter.com/Whoever
 * @donate https://paypal.me/
 * @patreon https://patreon.com/
 * @website https://github.com/lolpowerluke/plugin-stuff
 * @source https://gist.github.com/rauenzi/e5f4d02fc3085a53872b0236cd6f8225
 */

module.exports = class ExamplePlugin {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
