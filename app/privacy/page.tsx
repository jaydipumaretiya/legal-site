import { redirect } from "next/navigation";

export default function GlobalPrivacyPage() {
  redirect("/apps/appmanager/privacy");
}
