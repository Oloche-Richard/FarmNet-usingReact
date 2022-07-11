import Card from "./../UI/Card"
import "./Post.css"
import profilePostImg from "./../image/goldfish.jpg"
import profilePic from "./../image/profilePic.jpeg"
const Post = () => {
  return(
    <Card className='post-section'>
      <div className='post-user'> 
      <img src={profilePic} alt='profile' className='profilePic'/>
      <span>Oloche Richard</span>
      </div>
      <div className='post-caption'>
        <p>How to grow a school of fishes
        <span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <a href='/'>Read more</a></span>
        </p>
      </div>
      <div>
        <img src={profilePostImg} alt='profile post' className='profile-post-image'/>
      </div>
    </Card>
  )
}

export default Post;