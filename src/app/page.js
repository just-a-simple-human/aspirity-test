import BackToEmployees from "@/components/back-to-employees";
import UserInfo from "@/components/user-info";

export default function Home() {
  return (
    <main className="max-w-[1494px] w-screen relative pb-6 mx-auto">
      <BackToEmployees />
      <UserInfo />
    </main>
  );
}
