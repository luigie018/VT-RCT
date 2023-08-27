export default function Testament() {
    return (
        <>
        <figure className="sm:flex md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="src/assets/img/person.jpg" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg text-white font-medium">
                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel hic reiciendis laudantium possimus tempora quia facilis exercitationem. 
                        Doloribus enim, quod voluptates incidunt quos magnam asperiores dolore sed hic voluptatum..”
                    </p>
                </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        Mark Luigie Libres
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Application Consultant, BGC
                    </div>
                </figcaption>
            </div>
        </figure>
        </>
    )
}