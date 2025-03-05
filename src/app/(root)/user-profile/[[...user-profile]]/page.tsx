import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserProfilePage() {
  const user = await currentUser();
  if (!user)
    return (
      <div className="py-10 flex items-center justify-center">
        Not signed in
      </div>
    );

  return (
    <div className="py-10 flex items-center justify-center">
      <UserProfile path="/user-profile" />
    </div>
  );
}
