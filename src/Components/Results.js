/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import BookIcon from '@material-ui/icons/Book';

const Results = (props) => {
  const { repos, user } = props;
  {
    /* const [avatar, setAvatar] = useState([]); */
  }

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <Link to={{ pathname: `/repo/${item.full_name}` }} key={item.id}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </List>
        </Link>
      ))
    ) : (
      <div> No repos </div>
    );

  {
    /*
   useEffect(async () => {
    try {
      const result2 = await axios(`https://api.github.com/users/${user}`);
      setAvatar(result2.data.avatar_url);
    } catch (error) {
      console.log(error);
    }
  }, []);*/
  }

  return (
    <div>
      {/* <img src={avatar} /> */}

      <h2> {listRepos} </h2>
    </div>
  );
};

export default Results;
