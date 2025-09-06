import { BannedUser } from "./BannedUser.js";
/**
 * Server Ban
 */
export class ServerBan {
    client;
    id;
    reason;
    user;
    /**
     * Construct Server Ban
     * @param client Client
     * @param data Data
     */
    constructor(client, data, user) {
        this.client = client;
        this.id = data._id;
        this.reason = data.reason;
        this.user = user ? new BannedUser(client, user) : undefined;
    }
    /**
     * Server
     */
    get server() {
        return this.client.servers.get(this.id.server);
    }
    /**
     * Remove this server ban
     */
    async pardon() {
        await this.client.api.delete(`/servers/${this.id.server}/bans/${this.id.user}`);
    }
}
