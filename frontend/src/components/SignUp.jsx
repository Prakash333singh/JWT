import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {

    const [data, setdata] = useState("");
    const [username, setUsername] = useState("");

    axios.post('http://localhost:5001/user/signup', data)
        .then(response => {
            // Handle the response data
            console.log(response.data);
            //setdata(response.data);
        })
        .catch(error => {
            // Handle errors
            console.log(error);
        });
    return (
        <section class="">
            <div class=" items-center px-5 py-12 lg:px-20">
                <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-pink-200 rounded-lg md:mt-0">
                    <div class="mt-8">
                        <div class="mt-6">
                            <form action="#" method="POST" class="space-y-6">
                                <div>
                                    <label for="username" class="block text-sm font-medium text-neutral-600"> Username </label>
                                    <div class="mt-1">
                                        <input value={username}
                                            onChange={(e) => setUsername(e.target.value)} id="username" name="username" type="text" autocomplete="username" required="" placeholder="Enter Username" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" fdprocessedid="w60cvh" />
                                    </div>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                    <div class="mt-1">
                                        <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" fdprocessedid="w60cvh" />
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                                    <div class="mt-1">
                                        <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" fdprocessedid="gjqjit" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" onClick={(data) => console.log(data)} class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" fdprocessedid="91ibep">Sign Up</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp