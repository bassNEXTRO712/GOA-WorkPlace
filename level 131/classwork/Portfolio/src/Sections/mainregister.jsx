

const Registration = () => {
    function myfunction(e){
        e.preventDefault();

        const userInfo = {
            email: e.target.email.value,
            password : e.target.password.value,
            text : e.target.message.value
        }
        console.log(userInfo)
    }
    return(
        <form onSubmit={myfunction}>
  <input type="email" name="email" placeholder="Email" /><br /><br />
  <input type="password" name="password" placeholder="Password" /><br /><br />
  <input type="text" name="message" placeholder="Your message" /><br /><br />
  <button type="submit">Submit</button>
    </form>
    )
}
export default Registration