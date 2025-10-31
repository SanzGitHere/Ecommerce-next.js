import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest Function to save data to a database
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk',
    },
    {
        event : 'clerk/user.created'
    },
    async ({event})=>{

    }
)