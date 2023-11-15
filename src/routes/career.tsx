import { Article, ArticleContent } from "@/components/article";
import { Layout } from "@/components/layout";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
    { id: 1, name: 'Full Stack developer', to: '/career' },
    { id: 2, name: 'Front End developer', to: '/career' },
    { id:3, name: 'Back End developer', to: '/career' },
    { id: 4, name: 'UX designer', to: '/career' },
    { id: 5, name: 'Social Media manager', to: '/career' },
  ]

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
                    <ul className="list-none">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id} >
                                <NavLink to={link.to} className=" no-underline">{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </ArticleContent>
            </Article>
            </main>
         
        </Layout>
    )

}