## Export Patterns

- **Avoid multiple `export const` statements** in a single file
- **Use grouped exports** with `export { }` syntax for better organization
- **Prefer `export default`** for single primary exports

```typescript
// ❌ Bad - Multiple export const statements
export const getUserProfile = () => {
  /* ... */
};
export const updateUserProfile = () => {
  /* ... */
};
export const deleteUserProfile = () => {
  /* ... */
};

// ✅ Good - Grouped exports
const getUserProfile = () => {
  /* ... */
};
const updateUserProfile = () => {
  /* ... */
};
const deleteUserProfile = () => {
  /* ... */
};

export { getUserProfile, updateUserProfile, deleteUserProfile };

// ✅ Good - Default export for single primary export
const userApi = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};

export default userApi;
```
