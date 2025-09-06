import type { SessionCollection } from "../collections/SessionCollection.js";
/**
 * Session Class
 */
export declare class Session {
    #private;
    readonly id: string;
    /**
     * Construct Session
     * @param collection Collection
     * @param id Id
     */
    constructor(collection: SessionCollection, id: string);
    /**
     * Convert to string
     * @returns String
     */
    toString(): string;
    /**
     * Whether this object exists
     */
    get $exists(): boolean;
    /**
     * Time when this session was created
     */
    get createdAt(): Date;
    /**
     * Whether this is the current session
     */
    get current(): boolean;
    /**
     * Name
     */
    get name(): string;
    /**
     * Rename a session
     * @param name New name
     */
    rename(name: string): Promise<void>;
    /**
     * Delete a session
     */
    delete(): Promise<void>;
}
//# sourceMappingURL=Session.d.ts.map