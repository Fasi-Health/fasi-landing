import { Article, ArticleContent } from "@/components/article";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

export default function CareerPage() {
    return (
        <Layout>
            <main>
            <div className="flex flex-col gap-7 pl-10">
            <p className="text-primary text-6xl font-normal font-sans">WE'RE HIRING!</p>
            <img src="assets/illustrators/career-page-illustrator.png" alt="Career Page Illustrator" className=" w-96" />
            </div>
            <Article>
                <ArticleContent title="Opportunities">
                    <p><Link className=" no-underline" to="">Full Stack developer </Link></p>
                    <p><Link className=" no-underline" to="">Front End developer </Link></p>
                    <p><Link className=" no-underline" to="">Back End developer </Link></p>
                    <p><Link className=" no-underline" to="">UX Designer </Link></p>
                    <p><Link className=" no-underline" to="">Social media Manager </Link></p>
                </ArticleContent>
            </Article>
            </main>
         
        </Layout>
    )

}