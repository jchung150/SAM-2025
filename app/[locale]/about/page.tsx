import { getTranslations } from "next-intl/server";

import { Link } from "@/routing";
import { title } from "@/components/primitives";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>
      <p>{t("content")}</p>
      <Link href="/about">about</Link>
    </div>
  );
}
