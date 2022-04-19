import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
//import {Link} from 'react-router-dom'
//import { list } from './api-comments.js'

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
      padding: theme.spacing(1),
      margin: theme.spacing(5)
    }),
    title: {
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    }
    
  }))
  



export default function Comment() {
    const classes = useStyles()
    const [comments, setUsers] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
    
        /*list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })*/
    
        return function cleanup() {
            abortController.abort()
        }
    }, [])


    
    
  
return (
// Attempt at taking code from the database to implement into product reviews page
    /*<List>
    {comments.map((item, i) => {
        return <Link to={"/comment/" + item._id} key={i}>
                <ListItemText primary={item.name} />
        </Link>
    })
    }
    </List>*/

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Positive Review?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {"- The doggiedora fits perfectly!!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Positive Review"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Patriot pup hat looks amazing"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Negative Review"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Bought the jester costume, not happy not worth $30 :('}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
