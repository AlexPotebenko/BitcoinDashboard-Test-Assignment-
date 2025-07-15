import { UserProfile } from "@/lib/api/mock-api/index";

interface EditProfileFormProps {
  editForm: Partial<UserProfile>;
  setEditForm: (form: Partial<UserProfile>) => void;
  isEditing: boolean;
  updateProfileLoading: boolean;
  onEditToggle: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export const EditProfileForm = ({
  editForm,
  setEditForm,
  isEditing,
  updateProfileLoading,
  onEditToggle,
  onSave,
  onCancel,
}: EditProfileFormProps) => {
  return (
    <section className="bg-white rounded shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Edit Profile</h2>
        <button
          onClick={isEditing ? onSave : onEditToggle}
          disabled={updateProfileLoading}
          className={`px-3 py-1 rounded text-sm font-medium ${
            isEditing
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } disabled:opacity-50`}
        >
          {updateProfileLoading ? "Saving..." : isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <form className="space-y-2">
        <input
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          value={editForm.name || ""}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          placeholder="Full Name"
          disabled={!isEditing}
        />
        <input
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="email"
          value={editForm.email || ""}
          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
          placeholder="Email Address"
          disabled={!isEditing}
        />
        <select
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={editForm.accountType || "Basic"}
          onChange={(e) =>
            setEditForm({
              ...editForm,
              accountType: e.target.value as "Basic" | "Premium" | "VIP",
            })
          }
          disabled={!isEditing}
        >
          <option value="Basic">Basic Plan</option>
          <option value="Premium">Premium Plan</option>
          <option value="VIP">VIP Plan</option>
        </select>
      </form>
      {isEditing && (
        <button
          onClick={onCancel}
          className="mt-2 px-3 py-1 rounded text-sm text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      )}
    </section>
  );
};
