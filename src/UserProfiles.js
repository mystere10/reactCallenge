import React, {Component} from 'react';


class UserProfiles extends Component{
  
  AllMovies = () => {
	let MovieArray = []
    
    const movies = this.props.movies;
    
    for (let m in movies){
      MovieArray.push(movies[m])
    }
    
    return MovieArray;
  }

 AllUsers = () =>{
	let UsersArray = [];
    
    const users = this.props.users;
    
    for (let u in users){
    	UsersArray.push(users[u])
    }
    
    return UsersArray;
  }

  DisplayCompnent = () => {
	const AllMovies = this.AllMovies();
    const AllUsers = this.AllUsers();
    let list = [];
    
    for(let profile of this.props.profiles){
    	for(let mov of AllMovies){
        	for(let use of AllUsers){
              if(parseInt(profile.userID) === parseInt(use.id) && parseInt(profile.favoriteMovieID) === parseInt(mov.id)){
              	list.push(`${use.name}\'s favorite movie is ${mov.name}.`)
              }
            }
        }
    }
    return list;
  }

  
  
  render(){
    
   const UsersFavorites= this.DisplayCompnent();
        
    return (
      <ol>
       {UsersFavorites.map((favorite, index) => (
      	
      	<li key={index}>{favorite}</li>
    
    	))}
	  </ol>
    )
  }
};

export default UserProfiles;