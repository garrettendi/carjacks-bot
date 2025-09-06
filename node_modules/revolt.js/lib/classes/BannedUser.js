import { File } from "./File.js";
/**
 * Banned User
 */
export class BannedUser {
    id;
    avatar;
    username;
    discriminator;
    /**
     * Construct Banned User
     * @param client Client
     * @param data Data
     */
    constructor(client, data) {
        this.id = data._id;
        this.avatar = data.avatar ? new File(client, data.avatar) : undefined;
        this.username = data.username;
        this.discriminator = data.discriminator;
    }
}
