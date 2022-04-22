import React, {Component,useState} from 'react'
import { Route, Redirect, Link, useHistory } from 'react-router-dom';

const listOfUserCredentials =  [{
	email: "jvlandayaaan@gmail.com",
	password: "hello"
}]

function Login() {
	
		
		
	if (localStorage.getItem("user")!= null) {
		if (window.confirm("Wanna logout?") == true) {
			localStorage.removeItem("user")
		}
	}

	const [credentials, setCredentials] = useState({email:"", password:""});

	const onChange = (e) => {
		const value =  e.target.value
		setCredentials({...credentials, [e.target.name]: value})
	}



	const handleSubmit = (event) => {
    event.preventDefault();
		
		if (credentials.email != listOfUserCredentials[0].email && credentials.password != listOfUserCredentials[0].password) {
			alert("Invalid login, Please try again")
		}
		else {
			localStorage.setItem("user", JSON.stringify(credentials));
			alert("Successfully logged in")
		}
		return;

    }

    return (
			<>
				<div className="bg-white font-family-karla h-screen">
					<div className="w-full flex flex-wrap">
						<div className="w-full md:w-1/2 flex flex-col">
							<div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
								<Link to={"/"} className="bg-black text-white font-bold text-xl p-4">
									Home
								</Link>
							</div>

							<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
								<p className="text-center text-3xl">Welcome.</p>
								<form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
									<div className="flex flex-col pt-4">
										<label htmlFor="email" className="text-lg">
											Email
										</label>
										<input
											type="email"
											id="email"
										value={credentials.email}
										name="email"
											onChange={onChange}
											placeholder="your@email.com"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
										></input>
									</div>

									<div className="flex flex-col pt-4">
										<label htmlFor="password" className="text-lg">
											Password
										</label>
										<input
											type="password"
										id="password"
										name="password"
										value={credentials.password}
											onChange={onChange}
											placeholder="Password"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
										></input>
									</div>

									<input
										type="submit"
										value="Log In"
										className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
									></input>
								</form>
								<div className="text-center pt-12 pb-12">
									<p>
										Don't have an account?{" "}
										<Link to={"/register"} href="register.html" className="underline font-semibold">
											Register here.
										</Link>
									</p>
								</div>
							</div>
						</div>

						<div className="w-1/2 shadow-2xl">
							<img
								className="object-cover w-full h-screen hidden md:block"
								src="https://source.unsplash.com/IXUM4cJynP0"
							></img>
						</div>
					</div>
				</div>
			</>
		);

    {/* // return(
    //     <main>
    //     <div className="form">
    //         <div className="form_div">
    //     <h1>Login Form</h1>
    //     <form onSubmit={handleSubmit}>
    //         <div className="form_div">
    //             <br />
    //      <label>
    //         E-mail:
           
    //     </label><br />
    //     <input type="test" class="field_class"name="userEmail" required></input>
    //     <br></br>
    //      <label>
    //         Password:
    //         <input type="password"   class="field_class"name="pass" required></input>
    //     </label>
    //      <br />
    //      </div>  
    //         <input className="submit_class" type="submit"></input>   
            
    //     </form>
    //     <br />
    //     <Link  onClick={()=>
    //     history.push("/register")
    //     }>
    //        Haven't Registered Yet?
    //     </Link>
        
    //     </div>
    //     </div>
    //     </main>
        
    // ) */}
    
}

export default Login;
