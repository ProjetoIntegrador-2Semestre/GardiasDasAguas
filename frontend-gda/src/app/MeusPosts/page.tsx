import MeusPostsCard from "../Components/MeusPostsCard";

export default function MeusPosts(){
    return(
        <div className="flex flex-col justify-center items-center" style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "url('/background2.png') ",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }} >
        <div>
            <h1 className="text-white text-2xl p-4">Meus Posts</h1>
        </div>
        <div>
            <MeusPostsCard></MeusPostsCard>
        </div>
      </div>
    )
}