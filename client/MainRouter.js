import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import UserAdmin from './user/UsersAdmin'
import Shop from './Shop'
import ReviewsPage from './ReviewsPage'
import Reviews from './reviews/Reviews'
import data from './shop/data'


//work from nav bar show only one screen at a time depending on switchboard
const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/reviews" component={ReviewsPage}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/useradmin/:userId" component={UserAdmin}/>
      </Switch>
    </div>)
}

export default MainRouter

