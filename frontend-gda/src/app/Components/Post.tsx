"use client"

export default function Post() {
    return (
        <div className="bg-white rounded-4xl">
            <div className="flex flex-col items-start p-4 text-left">
                <h1>Titulo do post</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias ut quasi minus debitis velit quibusdam necessitatibus ipsum hic consectetur? Exercitationem sint omnis nesciunt, dicta odit quam quis placeat quae!</h3>
            </div>
            <div className="flex justify-center">
                <img src="/wukong.png" alt="macaco" className="rounded-xl border-2 border-black"/>
            </div>
        </div>
    )
}
