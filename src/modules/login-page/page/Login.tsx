
import Header from "../../../common/components/Header";

export default function  Login() {
    
    return (
        <>
            <Header />
            <div className="wrapper lg:mx-32 xl:mx-32">
                <div className="intro">
                    <div className="grid grid-cols-1 md:grid-cols-2 m-5 p-5 max-h-[100%]">
                        <div className="py-2 text-left m-1">
                            <h1 className="intro-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-left mb-5 text-cyan-400">Welcome to the LoGo</h1>
                            <p className="text-xs md:text-sm lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium expedita doloribus quasi perspiciatis temporibus nulla. Magni ab, veniam delectus animi ex doloribus libero iure eos ea accusamus, aut minima esse labore repellendus corrupti non distinctio incidunt, quae obcaecati illo accusantium. Eum, cum doloribus aperiam nihil qui porro eaque veniam corrupti dolore blanditiis asperiores omnis. Molestias, perferendis quia. Dignissimos ad suscipit voluptatibus, ab impedit quos, commodi numquam aliquam, perferendis quis facere incidunt placeat sit odit natus iure praesentium itaque. Architecto distinctio vel consequatur natus laudantium quo reiciendis sed dicta iste possimus earum ratione ex, provident facilis vitae hic labore deleniti, ab omnis corporis sequi voluptatem quam? Repellat tempore reprehenderit provident nobis error, eos a sit deserunt iure. Unde officia labore molestiae mollitia pariatur, ab excepturi harum eveniet voluptatem quo ipsam atque suscipit cumque, reiciendis fugit obcaecati, consectetur doloremque rem quod culpa debitis recusandae repudiandae alias dolor. Optio necessitatibus autem porro laboriosam corrupti. Vero autem molestias deleniti, accusamus vel mollitia perspiciatis quidem voluptate deserunt unde? Ipsa fuga odio, ex sequi amet commodi tempore libero tempora illo quasi error. Et sit sint, commodi deleniti corrupti culpa delectus, nihil ducimus totam illo placeat? Temporibus enim possimus quidem, porro molestiae reiciendis. Veritatis, tempora veniam.</p>
                            <div className="justify-between gap-3 grid grid-cols-1 md:grid-cols-3 w-[100%] h-[3rem] mt-5">
                                <button className="text-xs md:text-sm lg:text-md rounded-3xl h-[3rem] hover:text-white bg-cyan-400 py-1">Get Started <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>
                        
                        
                       
                    </div>
                </div>

                <div className="language-list grid gap-y-12 m-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10">
                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-html5 text-7xl max-p-5 text-orange-700 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-orange-700 font-medium text-center">HTML5</p>
                    </div>
                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-css3 text-7xl max-p-5 text-blue-700 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-blue-700 font-medium text-center">CSS3</p>
                    </div>
                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-js text-7xl max-p-5 text-yellow-400 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-yellow-400 font-medium text-center">JavaScript</p>
                    </div>
                    

                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-java text-7xl max-p-5 text-red-700 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-red-700 font-medium text-center">Java</p>
                    </div>
                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-react text-7xl max-p-5 text-blue-500 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-blue-500 font-medium text-center">React</p>
                    </div>
                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-angular text-7xl max-p-5 text-blue-700 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-blue-700 font-medium text-center">Angular</p>
                    </div>
                    <div className="max-w-[100%] max-h-[100%]">
                        <a><i className="fa-brands fa-python text-7xl max-p-5 text-yellow-400 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-yellow-400 font-medium text-center">Python</p>
                    </div>
                    <div className="max-w-[100%] max-h-[100%] bg-red">
                        <a><i className="fa-brands fa-git-alt text-7xl max-p-5 text-orange-700 m-5 flex justify-center"></i></a>
                        <p className="w-[100%] text-orange-700 font-medium text-center">Git</p>
                    </div>
                </div>

                <div className="language-list grid grid-cols-2 gap-2 m-5">
                    <div className="card max-w-[100%] max-h-[100%] sticky top-0">
                        basta
                    </div>
                    <div className="card max-w-[100%] max-h-[100%]">
                        basta2
                    </div>
                </div>
            </div>
            
            
        </>
    )
}