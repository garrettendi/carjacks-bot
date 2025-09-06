import { botHydration } from "./bot.js";
import { channelHydration } from "./channel.js";
import { channelUnreadHydration } from "./channelUnread.js";
import { channelWebhookHydration } from "./channelWebhook.js";
import { emojiHydration } from "./emoji.js";
import { messageHydration } from "./message.js";
import { serverHydration } from "./server.js";
import { serverMemberHydration } from "./serverMember.js";
import { sessionHydration } from "./session.js";
import { userHydration } from "./user.js";
/**
 * Hydrate some data
 * @param hydration Hydration data
 * @param input Input data
 * @returns Output data
 */
function hydrateInternal(hydration, input, context) {
    return Object.keys(input).reduce((acc, key) => {
        let targetKey, value;
        try {
            targetKey = hydration.keyMapping[key] ?? key;
            value = hydration.functions[targetKey](input, context);
        }
        catch {
            if (key === "partial") {
                return {
                    ...acc,
                    partial: input["partial"],
                };
            }
            if (key === "type")
                return acc;
            console.debug(`Skipping key ${String(key)} during hydration!`);
            return acc;
        }
        return {
            ...acc,
            [targetKey]: value,
        };
    }, {});
}
const hydrators = {
    bot: botHydration,
    channel: channelHydration,
    channelUnread: channelUnreadHydration,
    channelWebhook: channelWebhookHydration,
    emoji: emojiHydration,
    message: messageHydration,
    server: serverHydration,
    serverMember: serverMemberHydration,
    session: sessionHydration,
    user: userHydration,
};
/**
 * Hydrate some input with a given type
 * @param type Type
 * @param input Input Object
 * @param initial Whether this is the initial hydration
 * @returns Hydrated Object
 */
export function hydrate(type, input, context, initial) {
    return hydrateInternal(hydrators[type], initial ? { ...hydrators[type].initialHydration(), ...input } : input, context);
}
