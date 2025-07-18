import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <section className="bg-card rounded-lg shadow-sm p-4 border border-border-default">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-card-foreground">Edit Profile</h2>
        <div className="flex items-center space-x-2">
          {isEditing && (
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button
            className="w-[90px]"
            disabled={updateProfileLoading}
            variant={isEditing ? "submit" : "secondary"}
            onClick={isEditing ? onSave : onEditToggle}
          >
            {updateProfileLoading ? "Saving..." : isEditing ? "Save" : "Edit"}
          </Button>
        </div>
      </div>
      <form className="flex flex-col space-y-2">
        <Input
          value={editForm.name || ""}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          placeholder="Full Name"
          disabled={!isEditing}
        />
        <Input
          value={editForm.email || ""}
          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
          placeholder="Email Address"
          disabled={!isEditing}
        />
        <select
          className="cursor-pointer"
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
    </section>
  );
};
