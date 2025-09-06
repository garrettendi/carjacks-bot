import type { SetStoreFunction } from "solid-js/store";
import { type Hydrators } from "../hydration/index.js";
/**
 * Wrapper around Solid.js store
 */
export declare class ObjectStorage<T> {
    private store;
    readonly set: SetStoreFunction<Record<string, T>>;
    /**
     * Create new object storage
     */
    constructor();
    /**
     * Get object by ID
     * @param id ID
     * @returns Object
     */
    get(id: string): T | undefined;
    /**
     * Hydrate some data into storage
     * @param id ID
     * @param type Hydration type
     * @param context Context
     * @param data Input Data
     */
    hydrate(id: string, type: keyof Hydrators, context: unknown, data?: unknown): void;
}
//# sourceMappingURL=ObjectStorage.d.ts.map