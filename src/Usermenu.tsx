import { useContext } from "react";
import { UserContext } from "./App";
import { supaClient } from "./supa-client";

export default function UserMenu() {
    const { profile } = userContext(UserContext);

    return (
        <>
            <div className="flex flex-col">
                <h2>Welcome {profile?.username || "dude"}.</h2>
                <button
                    onClick={() => supaClient.auth.signOut()}
                    className="user-menu-logout-button"
                >
                Logout
                </button>
            </div>
        </>
    );
}
