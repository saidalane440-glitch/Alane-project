# Security Specification: RedVault

## Data Invariants
1. A file or project must always have an `ownerId` that matches the authenticated user's `uid`.
2. Users can only read/write their own files and projects.
3. User profiles are only writable by the owner.
4. Admin roles can only be assigned by existing admins (manual process or system boot).

## Dirty Dozen Payloads
1. **Identity Spoofing**: Attempt to create a file with `ownerId` of another user.
2. **PII Leak**: Attempt to read another user's profile with sensitive info.
3. **Shadow Update**: Attempt to update a project's `ownerId` to lock out the original owner.
4. **ID Poisoning**: Attempt to use `../` or long strings as document IDs in projects.
5. **Resource Exhaustion**: Attempt to upload metadata for 100,000 "ghost" files.
6. **Type Poisoning**: Sending a string for a `size` field.
7. **Privilege Escalation**: Attempt to set `role: 'admin'` during self-registration.
8. **Orphaned Writes**: Creating a file metadata without a valid user profile.
9. **Terminal State Break**: (Not applicable yet, but potentially on 'submitted' projects).
10. **Query Scraping**: Attempting to list ALL projects without a filter for `ownerId`.
11. **Timestamp Spoofing**: Sending a client-side `createdAt` date from the future.
12. **Key Injection**: Adding an `isVerified: true` field to a file metadata document.
