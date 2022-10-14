import Tweet from './Tweet';
import Banner from './Banner';
import '../Style/App.css';
import { useState } from 'react';

const DEFAULT_TWEET = [ {
  id: 0,
  name:"Geoffrey",
  content:"Mon premier tweet",
  like: 12,
},
{
  id:1,
  name:"Nima",
  content:"Mon premier tweet",
  like: 14,
},
{
  id:2,
  name:"Bruno",
  content:"Coucou",
  like: 20,
},
{
  id:3,
  name:"Paul",
  content:"Hello",
  like: 10,
},]

function App(){

  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(event)
    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      id : tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    }

    setTweets([...tweets, newTweet])
  }

  const onDelete = (tweetId) =>{
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets(curr => {
      const copyTweet = [...curr];
      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId);
      likedTweet.like +=1;

      return copyTweet;
    })
  }


  return(
    <div>
        <form onSubmit={handleSubmit} className='tweet__form'>
          <h4>New Tweet</h4>
          <input placeholder='name' type="text" name="name"/>
          <input placeholder='content' type="content" name="content"/>
          <input type='submit'/>
        </form>
      <div className='tweet__container'>
        {tweets.map((tweet) =>{
          return <Tweet 
            key={tweet.id} 
            id={tweet.id} 
            name={tweet.name} 
            content={tweet.content} 
            like={tweet.like} 
            onDelete ={(id) =>{onDelete(id)}}
            onLike = {(id) => {onLike(id)}}/>
          })}</div>
    </div>
  );
}

export default App;