import { createStore } from "solid-js/store";
import { hydrate } from "../hydration/index.js";
/**
 * Wrapper around Solid.js store
 */
export class ObjectStorage {
    store;
    set;
    /**
     * Create new object storage
     */
    constructor() {
        const [store, setStore] = createStore({});
        this.store = store;
        this.set = setStore;
        this.get = this.get.bind(this);
    }
    /**
     * Get object by ID
     * @param id ID
     * @returns Object
     */
    get(id) {
        return this.store[id];
    }
    /**
     * Hydrate some data into storage
     * @param id ID
     * @param type Hydration type
     * @param context Context
     * @param data Input Data
     */
    hydrate(id, type, context, data) {
        if (data) {
            data = { partial: false, ...data };
            this.set(id, hydrate(type, data, context, true));
        }
    }
}
