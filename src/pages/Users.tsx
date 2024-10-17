import { Routes, Route } from 'react-router-dom';

function InviteUsers() {
    return <h2>Invite Users</h2>;
}

function Contacts() {
    return <h2>Contacts</h2>;
}

function Team() {
    return <h2>Team</h2>;
}

export function Users() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <h1 className="text-3xl font-bold">Users</h1>
            <Routes>
                <Route path="invite" element={<InviteUsers />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="team" element={<Team />} />
            </Routes>
        </div>
    );
}
