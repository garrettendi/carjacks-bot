import type { ReactiveSet } from "@solid-primitives/set";
import type { ChannelUnreadCollection } from "../collections/ChannelUnreadCollection.js";
/**
 * Channel Unread Class
 */
export declare class ChannelUnread {
    #private;
    readonly id: string;
    /**
     * Construct Channel
     * @param collection Collection
     * @param id Channel Id
     */
    constructor(collection: ChannelUnreadCollection, id: string);
    /**
     * Whether this object exists
     */
    get $exists(): boolean;
    /**
     * Last read message id
     */
    get lastMessageId(): string | undefined;
    /**
     * List of message IDs that we were mentioned in
     */
    get messageMentionIds(): ReactiveSet<string>;
}
//# sourceMappingURL=ChannelUnread.d.ts.map