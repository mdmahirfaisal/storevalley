import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserProfilePage() {
  const user = await currentUser();
  console.log("UserProfilePage", user);

  if (!user) return <div>Not signed in</div>;

  return (
    <div className="py-5 flex items-center justify-center">
      <UserProfile path="/user-profile" />
    </div>
  );
}
