import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link as NavLink } from "react-router-dom";
import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link
} from "@mui/material";
const BASE_URL = "https://hn.algolia.com/api/v1/search?";
export interface IResponsForm {
  objectID: string;
  url: string;
  title: string;
  story_title: string;
}
const Paginationf = () => {
  const [posts, setPosts] = useState<IResponsForm[]>([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(({ data }) => {
      setPosts(data.hits);
      setPageQty(data.nbPages);
    });
  }, [query, page]);

  const [pageQty, setPageQty] = useState(0);
  
  return (
    <>
    <Stack spacing={2}>
      {posts.map((post) => (
        <Link key={post.objectID} href={post.url}>
          {post.title || post.story_title}
        </Link>
      ))}
      
    </Stack>
  </>
  )
}
export default Paginationf







// const HomePage = (props) => {
//   console.log(props);
//   const [posts, setPosts] = useState([]);
//   const [query, setQuery] = useState("react");
//   const [page, setPage] = useState(
//     parseInt(props.location.search?.split("=")[1] || 1)
//   );
//   const [pageQty, setPageQty] = useState(0);

//   useEffect(() => {
//     axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(({ data }) => {
//       setPosts(data.hits);
//       setPageQty(data.nbPages);

//       if (data.nbPages < page) {
//         setPage(1);
//         props.history.replace("/");
//       }
//     });
//   }, [query, page, props.history]);

//   return (
//     <>
//       <TextField
//         fullWidth
//         label="query"
//         value={query}
//         onChange={(event) => setQuery(event.target.value)}
//       />
//       <Stack spacing={2}>
//         {!!pageQty && (
//           <Pagination
//             count={pageQty}
//             page={page}
//             onChange={(_, num) => setPage(num)}
//             showFirstButton
//             showLastButton
//             sx={{ marginY: 3, marginX: "auto" }}
//             renderItem={(item) => (
//               <PaginationItem
//                 component={NavLink}
//                 to={`/?page=${item.page}`}
//                 {...item}
//               />
//             )}
//           />
//         )}
//         {posts.map((post) => (
//           <Link key={post.objectID} href={post.url}>
//             {post.title || post.story_title}
//           </Link>
//         ))}
//       </Stack>
//     </>
//   );
// };

// export default HomePage;
