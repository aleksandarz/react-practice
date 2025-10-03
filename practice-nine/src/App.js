import Navigation from "./Templates/Snippets/Navigation";
import Search from "./Components/Search";
import Footer from "./Templates/Snippets/Footer";
import { MovieProvider } from "./Context/MovieContext";
import SearchResults from "./Templates/SearchResults";

function App() {
  return (
    <>
      <MovieProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation/>
          <main className="flex-grow">
            <Search/>
            <SearchResults />
          </main>
          <Footer/>
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
