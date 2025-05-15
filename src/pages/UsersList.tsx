import { useNavigate } from "react-router-dom";

const users = [
  { id: "1", name: "Alice Admin", email: "alice@odaflow.io", role: "admin" },
  { id: "2", name: "Bob Distributor", email: "bob@odaflow.io", role: "distributor" },
  { id: "3", name: "Carol Manufacturer", email: "carol@odaflow.io", role: "manufacturer" },
];

export default function UsersList() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-primary">Users</h2>
        <button
          onClick={() => navigate("/users/new")}
          className="px-4 py-2 bg-accent text-white rounded"
        >
          + Add User
        </button>
      </div>

      <div className="overflow-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-neutral">
            <tr>
              {["Name", "Email", "Role", "Actions"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id}>
                <td className="px-6 py-3">{u.name}</td>
                <td className="px-6 py-3">{u.email}</td>
                <td className="px-6 py-3">{u.role}</td>
                <td className="px-6 py-3 space-x-2">
                  <button onClick={() => navigate(`/users/${u.id}`)}>View</button>
                  <button onClick={() => navigate(`/users/${u.id}/edit`)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}