import HeaderToolbar from "@/components/HeaderToolbar";
import ShoppingPane from "@/components/ShoppingPane";

export default function Home() {
    return (
        <main className="m-3 space-y-3">
            <HeaderToolbar />
            <ShoppingPane />
        </main>
    );
}
