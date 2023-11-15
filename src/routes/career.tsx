import { Layout } from "@/components/layout";

export default function CareerPage() {
    return (
        <Layout>
            <div className="flex flex-col gap-10 pl-10">
            <p className="text-primary text-6xl font-normal font-sans">WE'RE HIRING!</p>
            <img src="assets/illustrators/career-page-illustrator.svg" alt="Career Page Illustrator" className=" w-96" />
            </div>
        </Layout>
    )

}