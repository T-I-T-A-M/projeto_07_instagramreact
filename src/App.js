import Header from "./Header";
import Storys from "./Storys";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function App () {
    return (
        <div>
            <Header />
            <div class="container">
                <div class ="container-principal">
                    <Storys />
                    <Feed />
                </div>
                <div class ="container-secundario">
                    <Sidebar />
                </div>
            </div>
        </div>
        
    )
}