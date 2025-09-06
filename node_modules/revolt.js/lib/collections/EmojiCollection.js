import { Emoji } from "../classes/Emoji.js";
import { ClassCollection } from "./Collection.js";
/**
 * Collection of Emoji
 */
export class EmojiCollection extends ClassCollection {
    /**
     * Fetch emoji by ID
     * @param id Id
     * @returns Emoji
     */
    async fetch(id) {
        const emoji = this.get(id);
        if (emoji && !this.isPartial(id))
            return emoji;
        const data = await this.client.api.get(`/custom/emoji/${id}`);
        return this.getOrCreate(data._id, data);
    }
    /**
     * Get or create
     * @param id Id
     * @param data Data
     * @param isNew Whether this object is new
     */
    getOrCreate(id, data, isNew = false) {
        if (this.has(id) && !this.isPartial(id)) {
            return this.get(id);
        }
        else {
            const instance = new Emoji(this, id);
            this.create(id, "emoji", instance, this.client, data);
            if (isNew)
                this.client.emit("emojiCreate", instance);
            return instance;
        }
    }
    /**
     * Get or return partial
     * @param id Id
     */
    getOrPartial(id) {
        if (this.has(id)) {
            return this.get(id);
        }
        else if (this.client.options.partials) {
            const instance = new Emoji(this, id);
            this.create(id, "emoji", instance, this.client, {
                id,
            });
            return instance;
        }
    }
}
