import Home from "./components/home";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Subjects from "./components/subjects";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home useQuery={useQuery} />} />
          <Route path="/Subjects/:subject" element={<Subjects />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
