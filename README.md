# MøshDrop (React + Vite + Tailwind v2 + Firebase)

1. Clone this repo.
2. Copy `.env.example` to `.env` and fill in Firebase config + owner key.
3. Install:
   npm install
4. Run:
   npm run dev
5. Create inbox links like: /m/abc123
   - Visitors with that link can send messages.
6. Owner dashboard: /owner
   - Enter OWNER KEY from .env to view inbox messages.

Firebase:
- Create a Firestore database (start in test mode for quick dev).
- The app writes messages to `inboxes/{inboxId}/messages`.

Security:
- This demo uses a simple owner key for the dashboard. For production, use proper auth (Firebase Auth) and stricter security rules.
