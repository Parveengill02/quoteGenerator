import React, { useEffect, useState } from 'react'
import "./quoteGenerator.css"
function Quotegenerator() {
  const quotes=[{
       "title":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
{
       "title":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
{
       "title":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
{
       "title":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
{
       "title":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
{
       "title":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
{
       "title":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
{
       "title":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
{
       "title":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
{
       "title":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
{
       "title":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},
{
       "title":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
{
       "title":"We become what we think about.","author":"Earl Nightingale"},
{
       "title":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","author":"Mark Twain"},
{
       "title":"Life is 10% what happens to me and 90% of how I react to it.","author":"Charles Swindoll"},
{
       "title":"The most common way people give up their power is by thinking they don’t have any.","author":"Alice Walker"},
{
       "title":"The mind is everything. What you think you become.","author":"Buddha"},
{
       "title":"The best time to plant a tree was 20 years ago. The second best time is now.","author":"Chinese Proverb"},
{
       "title":"An unexamined life is not worth living.","author":"Socrates"},
{
       "title":"Eighty percent of success is showing up.","author":"Woody Allen"},
{
       "title":"Your time is limited, so don’t waste it living someone else’s life.","author":"Steve Jobs"},
{
       "title":"Winning isn’t everything, but wanting to win is.","author":"Vince Lombardi"},
{
       "title":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey"},
{
       "title":"Every child is an artist.  The problem is how to remain an artist once he grows up.","author":"Pablo Picasso"},
{
       "title":"You can never cross the ocean until you have the courage to lose sight of the shore.","author":"Christopher Columbus"},
{
       "title":"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},
{
       "title":"Either you run the day, or the day runs you.","author":"Jim Rohn"},
{
       "title":"Whether you think you can or you think you can’t, you’re right.","author":"Henry Ford"},
{
       "title":"The two most important days in your life are the day you are born and the day you find out why.","author":"Mark Twain"},
{
       "title":"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.","author":"Johann Wolfgang von Goethe"},
{
       "title":"The best revenge is massive success.","author":"Frank Sinatra"},
{
       "title":"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.","author":"Zig Ziglar"},
{
       "title":"Life shrinks or expands in proportion to one’s courage.","author":"Anais Nin"},

  ]

  useEffect(()=>{
    randomQuotes()
  },[]);

  const randomQuotes=()=>{
    const randomIndex=Math.floor(Math.random()*quotes.length);
    setQuote(quotes[randomIndex])
  }
   const [quote,setQuote]=useState(quotes[0]);
  return (
    <div className="quote-box">
       <div className="quote-container">
    <h1>Quote Generator</h1>
    <p>{quote.title}</p>
    <p className='quote-author'> ~ {quote.author}</p>
    <button onClick={randomQuotes}>Generate Quote</button>
    </div>
    </div>
   
  )
}

export default Quotegenerator